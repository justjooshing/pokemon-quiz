import React, { Component } from 'react';
import AnswersConfirmWrapper from "./answers_confirm_wrapper/AnswersConfirmWrapper"

export class Easy extends Component {
  render() {

    const {questionSet, score, round, answerTopics, answerSets, roundCounter, scoreCounter} = this.props;
    let pokemon = questionSet[round];
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

export default Easy
