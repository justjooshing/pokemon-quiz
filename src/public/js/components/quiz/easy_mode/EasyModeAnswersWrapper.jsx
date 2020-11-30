import React, { Component } from 'react';
import AnswersConfirmWrapper from "./answers_confirm_wrapper/AnswersConfirmWrapper"

export class EasyMode extends Component {
  render() {

    const {score, round, answerTopics, answerSets, roundCounter, scoreCounter, pokemon} = this.props;
    const answers = answerSets[round];

    return (
      <AnswersConfirmWrapper
      score={score}
      scoreCounter={scoreCounter}
      pokemon={pokemon}
      answers={answers}
      topics={answerTopics[round]}
      round={round}
      roundCounter={roundCounter}
    />
    )
  }
}

export default EasyMode
