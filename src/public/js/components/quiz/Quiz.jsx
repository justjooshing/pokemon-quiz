import React from "react";
import PropTypes from "prop-types";

import Indicators from "./indicators/Indicators";
import PokemonImage from "./pokemon_image/PokemonImage";
import Question from "./question/Question"
import AnswersWrapper from "./answers_wrapper/AnswersWrapper"

class Quiz extends React.Component {
  render() {
    const {questionSet , round} = this.props;
    let pokemon = questionSet[round];

    return (
      <div>
        <Indicators 
          round={round}
          setMode={this.props.setMode} 
          modes={this.props.modes}
        />
        <PokemonImage pokemon={pokemon}/>
        <Question />
        <AnswersWrapper
        // add conditional rendering in here
        />
        {/* <Confirm_Next /> */}
      </div>
    );
  }
}

Quiz.propTypes = {
  round: PropTypes.number.isRequired
} 


export default Quiz;
