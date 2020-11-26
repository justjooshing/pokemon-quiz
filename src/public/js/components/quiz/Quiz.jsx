import React from "react";
import PropTypes from "prop-types";

import Indicators from "./indicators/Indicators";
import PokemonImage from "./pokemon_image/PokemonImage";
import Question from "./question/Question"
import AnswersConfirmWrapper from "./answers_confirm_wrapper/AnswersConfirmWrapper"

const shuffle = (array) => {
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


class Quiz extends React.Component {
  render() {
    const {questionSet , round, answerTopics, answerSets} = this.props;
    let pokemon = questionSet[round];
    const answers = answerSets[round];

    //Mix up all the possible answers
    shuffle(answers)
    

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
        <AnswersConfirmWrapper
          pokemon={pokemon}
          answers={answers}
          topics={answerTopics[round]}
          round={round}
          roundCounter={this.props.roundCounter}
        />
      </div>
    );
  }
}

Quiz.propTypes = {
  round: PropTypes.number.isRequired
} 


export default Quiz;
