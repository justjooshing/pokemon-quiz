import React from "react";
import PropTypes from "prop-types";

import Indicators from "./indicators/Indicators";
import PokemonImage from "./pokemon_image/PokemonImage";
import Question from "./question/Question"

import EasyModeAnswerWrapper from "./easy_mode/EasyModeAnswersWrapper.jsx"
import HardModeAnswerWrapper from "./hard_mode/HardModeAnswersWrapper.jsx"

class Quiz extends React.Component {
  render() {
    const {setMode, modes, questionSet, score, round, answerTopics, answerSets, roundCounter, scoreCounter, startOver} = this.props;
    let pokemon = questionSet[round];
    return (
      <div>
        <Indicators 
          round={round}
          setMode={setMode} 
          modes={modes}
          startOver={startOver}
        />
        <PokemonImage pokemon={pokemon}/>
        <Question
          topic={answerTopics[round]}
        />
        {setMode === "easy" ? 
        ( <EasyModeAnswerWrapper
          pokemon={pokemon}
          score={score}
          round={round}
          answerTopics={answerTopics}
          answerSets={answerSets}
          roundCounter={roundCounter}
          scoreCounter={scoreCounter}
        />) : 
        (<HardModeAnswerWrapper
          pokemon={pokemon}
          />)}      
      </div>
    )
  }
}

Quiz.propTypes = {
  round: PropTypes.number.isRequired
} 


export default Quiz;
