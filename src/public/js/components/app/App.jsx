import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"

import Heading from "../intro/heading/Heading"
import Subheading from "../intro/subheading/Subheading"
import Modes from "../intro/modes/Modes"

import InstructionsPage from "../instructions_page/InstructionsPage"
import Quiz from "../quiz/Quiz"

class App extends React.Component {
  state = {
    setMode: "",
    round: 1,
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
    pokemon: {
        name: "test",
        image: "test again",
    }
  }

   selectMode = (mode) => {
    this.setState({
      setMode: mode    
    })
  }

  
 generateQuestions = async () => {
    const number = Math.floor(Math.random() * 151);
    const nameUrl = `https://pokeapi.co/api/v2/pokemon/${number}`;
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`;
    
    const response = await fetch(nameUrl);
    const data = await response.json();

    const pokemon = {...this.state.pokemon};
    pokemon.name = data.name;
    pokemon.image = imageUrl;
    this.setState({
      pokemon,
    });
    console.log(this.state.pokemon)
  }


  render() {
    return (
      <Router>
        <Route
        exact
        path="/"
        render={() => (
          <React.Fragment>
            <Heading />
            <Subheading />
            <Modes 
              selectMode={this.selectMode} 
              modes={this.state.modes}
            />
          </React.Fragment>
          )}
        />
        <Route 
          path="/instructions"
          render={() => (
            <React.Fragment>
              <InstructionsPage 
                setMode={this.state.setMode} 
                modes={this.state.modes} 
                generateQuestions={this.generateQuestions} 
                //pokemon={this.state.pokemon}
              />
          </React.Fragment>
          )}
        />
        <Route 
          path="/quiz"
          render={() => (
            <React.Fragment>
              <Quiz 
              setMode={this.state.setMode} 
              modes={this.state.modes} 
              round={this.state.round}/>
          </React.Fragment>
          )}
        />
      </Router>
    )
  }
}

export default App;
