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
    this.grabAllPokemonNames()
  }

  grabAllPokemonNames = async () => {

    const allPokemonFetch = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");
    const allPokemonJSON = await allPokemonFetch.json();

    //Push names only into an array
    const allPokemonNames = [];
    allPokemonJSON.results.forEach(pokemon => {
      allPokemonNames.push(pokemon.name)
    })

    //set state with all 151 pokemon names array
    this.setState({
      names: allPokemonNames
    }, () => this.generateQuestions())
}

  generateQuestions = async () => {
    const numberOfPokemon = 10;
    const questionSet = [];

    //grab n (10) number of pokemon from the API
    while (questionSet.length < numberOfPokemon) {
      const number = Math.floor(Math.random() * 151) + 1;
      const pokemon = {};
      const nameUrl = `https://pokeapi.co/api/v2/pokemon/${number}`;
      const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`;
    
      const singlePokemonResponse = await fetch(nameUrl);
      const singlePokemonJSON = await singlePokemonResponse.json();

      //Grab and assign name
      pokemon.name = singlePokemonJSON.name;

      //remove the female and male tags from the nidoran names
      if (pokemon.name.includes("nidoran")) {
        pokemon.name = "nidoran"
      }

      //Grab, assign and join type
      pokemon.type = [];
      singlePokemonJSON.types.forEach(typeIndex => {
        pokemon.type.push(typeIndex.type.name)    
      });
      pokemon.type = pokemon.type.join("/");

      //Assign url
      pokemon.image = imageUrl;

      //Assign pokemon to set
      if (!questionSet.some(pokemonIndex => pokemonIndex.name === pokemon.name)) {
      questionSet.push(pokemon)
      }
    }

    //Set state with new pokemon set now containing (n) pokemon
    this.setState({
      questionSet,
    });
}

  generatePossibleAnswers = () => { 
    console.log(this.state.questionSet[0].name, this.state.questionSet[0].type)

     //Generate array of Type answers
    const generateTypeAnswers = (selectedPokemon) => {     
      const possibleTypeAnswers = [];

      //Add correct type answer
      possibleTypeAnswers.push(selectedPokemon.type);

      //Randomly choose 3 of the wrong type answers
      while (possibleTypeAnswers.length < 4) {
        const num = Math.floor(Math.random() * 37);
        if (!possibleTypeAnswers.includes(this.state.types[num])) {
          possibleTypeAnswers.push(this.state.types[num])
        }
      }
      console.log(possibleTypeAnswers)
    }

    //Generate array of Name answers
    const generateNameAnswers = (selectedPokemon) => {         
      const possibleNameAnswers = [];
         
      //Add correct name answer
      possibleNameAnswers.push(selectedPokemon.name);

      //Randomly choose 3 of the wrong name answers
      while (possibleNameAnswers.length < 4) {
        const num = Math.floor(Math.random() * 151);
        if (!possibleNameAnswers.includes(this.state.names[num])) {
          possibleNameAnswers.push(this.state.names[num])
          }
       }
       console.log(possibleNameAnswers)
     }
      
    this.state.questionSet.forEach(selectedPokemon => {
      generateTypeAnswers(selectedPokemon);
      generateNameAnswers(selectedPokemon);
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
                generatePossibleAnswers={this.generatePossibleAnswers}
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
