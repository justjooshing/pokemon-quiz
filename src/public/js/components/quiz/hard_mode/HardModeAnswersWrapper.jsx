import React, { Component } from 'react'
import AnswerConfirmWrapper from './answer_confirm_wrapper/AnswerConfirmWrapper'


export class HardModeAnswersWrapper extends Component {
    
  render() {
    const {round, pokemon, answerTopics, roundCounter, scoreCounter} = this.props
    const topics = answerTopics[round];

    return (
      <AnswerConfirmWrapper 
      round={round}
      topics = {topics}
      pokemon = {pokemon}
      roundCounter = {roundCounter}
      scoreCounter = {scoreCounter}
      />
    )
  }
}

export default HardModeAnswersWrapper
