import React, { Component } from 'react'
import AnswerConfirmWrapper from './answer_confirm_wrapper/AnswerConfirmWrapper'


export class HardModeAnswersWrapper extends Component {
    
  render() {
    const {endQuiz, round, pokemon, answerTopics, roundCounter, scoreCounter} = this.props
    const topic = answerTopics[round];

    return (
      <AnswerConfirmWrapper 
      round={round}
      topic = {topic}
      pokemon = {pokemon}
      roundCounter = {roundCounter}
      scoreCounter = {scoreCounter}
      endQuiz = {endQuiz}
      />
    )
  }
}

export default HardModeAnswersWrapper
