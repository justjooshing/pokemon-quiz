import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import concat from "lodash/concat";

import Heading from "../intro/heading/Heading"
import Subheading from "../intro/subheading/Subheading"
import Modes from "../intro/modes/Modes"

import InstructionsPage from "../instructions_page/InstructionsPage"
import Quiz from "../quiz/Quiz"
import { array } from 'prop-types';

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
    types: [
      "grass/poison", 
      "fire", 
      "fire/flying", 
      "water", 
      "bug", 
      "bug/flying", 
      "bug/poison", 
      "normal/flying", 
      "normal", 
      "poison", 
      "electric", 
      "ground", 
      "poison/ground", 
      "fairy", 
      "normal/fairy", 
      "poison/flying", 
      "bug/grass", 
      "fighting", 
      "water/fighting", 
      "psychic", 
      "water/poison", 
      "rock/ground", 
      "water/psychic", 
      "electric/steel", 
      "water/ice", 
      "ghost/poison", 
      "grass/psychic", 
      "ground/rock", 
      "grass", 
      "psychic/fairy", 
      "ice/psychic", 
      "water/flying", 
      "rock/water", 
      "rock/flying", 
      "ice/flying", 
      "electric/flying", 
      "dragon", 
      "dragon/flying"] 
  }

   selectMode = (mode) => {
    this.setState({
      setMode: mode    
    })

    this.grabAllPokemon().then
  }

  grabAllPokemon = async () => {
    let startN = 1
    const endN = 151;
    const pokemonSet = [];

    for (startN; startN <= endN; startN++) {
        const pokemon = {};
        const nameUrl = `https://pokeapi.co/api/v2/pokemon/${startN}`;
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${startN}.png`;
        
        const response = await fetch(nameUrl);
        const data = await response.json();

        //Grab and assign name
        pokemon.name = data.name;

          //remove the female and male tags from the nidoran names
          if (pokemon.name.includes("nidoran")) {
            pokemon.name = "nidoran"
          }

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

  
  generateQuestions = () => {
    const n = 10; //number of questions
    const questionSet = [];

      while (questionSet.length < n) {
        const number = (Math.floor(Math.random() * 151) + 1);

        if (!questionSet.includes(this.state.pokemonSet[number])) {
        questionSet.push(this.state.pokemonSet[number])
        }
      }

    //Set state with 10 pokemon questions
    this.setState({
      questionSet,
    }, () => this.generatePossibleAnswers())
    
  } 

  generatePossibleAnswers = () => {
    this.state.questionSet.forEach(selectedPokemon => {
      const possibleAnswers = [];

      possibleAnswers.push(selectedPokemon.type);

      //Randomly choose 3 of the wrong answers
      while (possibleAnswers.length < 4){
        const num = Math.floor(Math.random() * 37);
        if (!possibleAnswers.includes(this.state.types[num])) {
        possibleAnswers.push(this.state.types[num])
        }
      }
      console.log(possibleAnswers)
    })
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
                pokemonSet={this.state.pokemonSet}
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
              questionSet = {this.state.questionSet}
              />
          </>
          )}
        />
      </Router>
    )
  }
}

export default App;
