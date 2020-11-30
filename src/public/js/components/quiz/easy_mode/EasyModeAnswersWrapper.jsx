import React, { Component } from 'react';
import AnswersConfirmWrapper from "./answers_confirm_wrapper/AnswersConfirmWrapper"

export class EasyMode extends Component {
  render() {
    const {score, round, answerTopics, answerSets, roundCounter, scoreCounter, pokemon} = this.props;
    const answers = answerSets[round];
    const topics = answerTopics[round];

    return (
      <AnswersConfirmWrapper
      score={score}
      scoreCounter={scoreCounter}
      pokemon={pokemon}
      answers={answers}
      topics={topics}
      round={round}
      roundCounter={roundCounter}
    />
    )
  }
}

export default EasyMode
