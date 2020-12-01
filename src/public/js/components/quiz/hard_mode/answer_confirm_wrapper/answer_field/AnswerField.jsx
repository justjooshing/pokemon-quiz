import React, { Component } from 'react'

import TypeDirective from "./type_directive/TypeDirective";
import AnswerInput from "./answer_input/AnswerInput"
import CorrectAnswer from "./correct_answer/CorrectAnswer"


export class AnswerField extends Component {
  render() {
    const {pokemon, topic, whichButton, correctAnswer, tempSubmittedAnswer, updateSubmittedAnswer, submittedAnswer} = this.props
    return (
      <>
        { (topic === "type") && <TypeDirective /> }

        <AnswerInput
          whichButton = {whichButton}
          correctAnswer = {correctAnswer}
          tempSubmittedAnswer = {tempSubmittedAnswer}
          updateSubmittedAnswer={updateSubmittedAnswer}
          submittedAnswer = {submittedAnswer}  
        />
        { (whichButton === "next" && submittedAnswer !== correctAnswer) &&
          <CorrectAnswer
            correctAnswer={correctAnswer}
          />
        }
      </>
    )
  }
}

export default AnswerField
