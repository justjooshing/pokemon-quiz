import React from "react";
import PropTypes from "prop-types";

import Indicators from "./indicators/Indicators";
import PokemonImage from "./pokemon_image/PokemonImage";
import Question from "./question/Question"
import AnswersWrapper from "./answers_wrapper/AnswersWrapper"
import ConfirmNextWrapper from "./confirm_next_wrapper/ConfirmNextWrapper"

class Quiz extends React.Component {
  render() {
    const {questionSet , round, answerTopics, answerSets} = this.props;
    let pokemon = questionSet[round];

    return (
      <div>
        <Indicators 
          round={round}
          setMode={this.props.setMode} 
          modes={this.props.modes}
        />
        <PokemonImage pokemon={pokemon}/>
        <Question
          topic={answerTopics[round]}
        />
        <AnswersWrapper
          answers = {answerSets[round]}
        />
        <ConfirmNextWrapper 
          round={round}
          roundCounter={this.props.roundCounter}/>
      </div>
    );
  }
}

Quiz.propTypes = {
  round: PropTypes.number.isRequired
} 


export default Quiz;
