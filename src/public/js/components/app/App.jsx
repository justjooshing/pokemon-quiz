import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";

import Heading from "../intro/heading/Heading"
import Subheading from "../intro/subheading/Subheading"
import Modes from "../intro/modes/Modes"

import InstructionsPage from "../instructions_page/InstructionsPage"

import Quiz from "../quiz/Quiz";

import FinalPage from "../final_page/FinalPage"

class App extends React.Component {
  state = {
    setMode: "",
    round: 0,
    score: 0,
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
      "dragon/flying"],
    answerTopics: [

    ],
    answerSets: [

    ]
  }

  selectMode = (mode) => {
    this.setState({
      setMode: mode    
    })
    this.grabAllPokemonNames()
  }

  roundCounter = () => {
    this.setState({
      round: this.state.round +1
    });
  }

  scoreCounter = () => {
    this.setState({
      score: this.state.score +1
    })
  }

  grabAllPokemonNames = async () => {

    const allPokemonFetch = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");
    const allPokemonJSON = await allPokemonFetch.json();

    //Push names only into an array
    const allPokemonNames = [];
    allPokemonJSON.results.forEach(pokemon => {
      //remove the female and male tags from the nidoran names
      if (pokemon.name.includes("nidoran")) {
        pokemon.name = "nidoran"
      }
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
    const answerTopics = [];
    const answerSets = [];

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
      answerSets.push(possibleTypeAnswers)
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
      answerSets.push(possibleNameAnswers)
    }

    const generateAnswerSets = (selectedPokemon) => {
      const questionTopic = ['name', 'type'];
      const chosenTopic = questionTopic[Math.floor(Math.random() * 2)];
      answerTopics.push(chosenTopic)  
       
      if (chosenTopic === 'type') {
        generateTypeAnswers(selectedPokemon)
      } else if (chosenTopic === 'name') {
        generateNameAnswers(selectedPokemon)
      }
    }
      
    this.state.questionSet.forEach(selectedPokemon => {
      generateAnswerSets(selectedPokemon);
    })

    answerSets.forEach(roundOptions => this.shuffle(roundOptions))

    this.setState({
      answerTopics, answerSets
    })
  }

  shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  
  startOver = () => {
    this.setState({
      setMode: "",
      round: 0,
      score: 0
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
              <InstructionsPage 
                setMode={this.state.setMode} 
                modes={this.state.modes} 
                generatePossibleAnswers={this.generatePossibleAnswers}
                pokemonSet={this.state.pokemonSet}
              />
          )}
        />
        <Route 
          path="/quiz"
          render={() => (
              <Quiz 
              setMode = {this.state.setMode} 
              modes = {this.state.modes} 
              round = {this.state.round}
              score = {this.state.score}
              questionSet = {this.state.questionSet}
              answerSets = {this.state.answerSets}
              answerTopics = {this.state.answerTopics}
              roundCounter = {this.roundCounter}
              scoreCounter = {this.scoreCounter}
              />
          )}
        />
        <Route 
          path="/finished"
          render={() => (
            <>
              <FinalPage   
              score = {this.state.score}   
              startOver = {this.startOver}
              />
          </>
          )}
        />
      </Router>
    )
  }
}

export default App;
