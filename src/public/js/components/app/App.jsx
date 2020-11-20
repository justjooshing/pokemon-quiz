import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import concat from "lodash/concat";

import Heading from "../intro/heading/Heading"
import Subheading from "../intro/subheading/Subheading"
import Modes from "../intro/modes/Modes"

import InstructionsPage from "../instructions_page/InstructionsPage"
import Quiz from "../quiz/Quiz"

class App extends React.Component {
  state = {
    setMode: "",
    round: 0,
    modes: {
      easy:  {
          id: "1",
          type: "easy",
          button_heading: "EASY",
          button_paragraph: "For pokemon masters in training",
          instructions: [
            "You will be presented with 10 questions.",
            "One at a time.",
            "You will be shown a picture of a pokemon and a question.",
            "You will also be given four answer options.",
            "Read the question carefully.",
            "Select the appropriate answer.",
          ],
        },
      hard:  {
          id: "2",
          type: "hard",
          button_heading: "HARD",
          button_paragraph: "For experienced pokemon masters",
          instructions: [
            "You will be presented with 10 questions.",
            "One at a time.",
            "You will be shown a picture of a pokemon and a question.",
            "Read the question carefully.",
            "Submit your answer in the textbox provided.",
          ],
        }
    },
  }

   selectMode = (mode) => {
    this.setState({
      setMode: mode    
    })
  }

  
 generateQuestions = async () => {
  const n = 10;
  const pokemonSet = [];

  for (let i = 0; i < n; i++) {
      const pokemon = {};
      const number = Math.floor(Math.random() * 151);
      const nameUrl = `https://pokeapi.co/api/v2/pokemon/${number}`;
      const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`;
      
      const response = await fetch(nameUrl);
      const data = await response.json();

      //Grab and assign name
      pokemon.name = data.name;

      //Grab, assign and join type
      pokemon.type = []
      data.types.forEach(index => {
        pokemon.type.push(index.type.name)    
      });
      pokemon.type = pokemon.type.join("/");

      //Assign url
      pokemon.image = imageUrl;

      //Assign pokemon to set
      pokemonSet.push(pokemon)
    }
   //Set state with new pokemon set
    this.setState({
      pokemonSet,
    });
  }


  render() {
    return (
      <Router>
        <Route
        exact
        path="/"
        render={() => (
          <>
            <Heading />
            <Subheading />
            <Modes 
              selectMode={this.selectMode} 
              modes={this.state.modes}
            />
          </>
          )}
        />
        <Route 
          path="/instructions"
          render={() => (
            <>
              <InstructionsPage 
                setMode={this.state.setMode} 
                modes={this.state.modes} 
                generateQuestions={this.generateQuestions} 
                //pokemon={this.state.pokemon}
              />
          </>
          )}
        />
        <Route 
          path="/quiz"
          render={() => (
            <>
              <Quiz 
              setMode = {this.state.setMode} 
              modes = {this.state.modes} 
              round = {this.state.round}
              pokemonSet = {this.state.pokemonSet}
              />
          </>
          )}
        />
      </Router>
    )
  }
}

export default App;
