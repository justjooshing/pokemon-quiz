import React from "react";
import PropTypes from "prop-types";

import Indicators from "./indicators/Indicators";
import PokemonImage from "./pokemon_image/PokemonImage";
import Easy from "./easy_mode/EasyMode.jsx"
import Question from "./question/Question"

class Quiz extends React.Component {
  render() {
    const {setMode, modes, questionSet, score, round, answerTopics, answerSets, roundCounter, scoreCounter} = this.props;
    let pokemon = questionSet[round];
    const answers = answerSets[round];

    if (setMode === "easy") {
      return (
        <div>
          <Indicators 
            round={round}
            setMode={setMode} 
            modes={modes}
          />
          <Question
            topic={answerTopics[round]}
          />
          <PokemonImage pokemon={pokemon}/>
          {setMode === "easy" ? 
          ( <Easy
            questionSet={questionSet}
            score={score}
            round={round}
            answerTopics={answerTopics}
            answerSets={answerSets}
            roundCounter={roundCounter}
            scoreCounter={scoreCounter}
          />) : 
          (<Hard/>)}      
          
        </div>
      )
    }
    if (setMode === "hard") {
      return (
        <h1>coming soon</h1>
      )
    }
  }
}

Quiz.propTypes = {
  round: PropTypes.number.isRequired
} 


export default Quiz;
