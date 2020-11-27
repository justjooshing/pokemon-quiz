import React from "react";
import PropTypes from "prop-types";

import Indicators from "./indicators/Indicators";
import PokemonImage from "./pokemon_image/PokemonImage";
import Question from "./question/Question"
import AnswersConfirmWrapper from "./answers_confirm_wrapper/AnswersConfirmWrapper"

class Quiz extends React.Component {
  render() {
    const {setMode, modes, questionSet, score, round, answerTopics, answerSets, roundCounter, scoreCounter} = this.props;
    let pokemon = questionSet[round];
    const answers = answerSets[round];

    return (
      <div>
        <Indicators 
          round={round}
          setMode={setMode} 
          modes={modes}
        />
        <PokemonImage pokemon={pokemon}/>
        <Question
          topic={answerTopics[round]}
        />
        <AnswersConfirmWrapper
          score={score}
          scoreCounter={scoreCounter}
          pokemon={pokemon}
          answers={answers}
          topics={answerTopics[round]}
          round={round}
          roundCounter={roundCounter}
        />
      </div>
    );
  }
}

Quiz.propTypes = {
  round: PropTypes.number.isRequired
} 


export default Quiz;
