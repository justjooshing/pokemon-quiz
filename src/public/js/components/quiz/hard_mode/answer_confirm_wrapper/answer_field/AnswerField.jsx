import React, { Component } from 'react'

import TypeDirective from "./type_directive/TypeDirective";
import AnswerInput from "./answer_input/AnswerInput"
import CorrectAnswer from "./correct_answer/CorrectAnswer"


export class AnswerField extends Component {
  render() {
    return (
      <>
        <TypeDirective/>
        <AnswerInput
          whichButton = {this.props.whichButton}
          correctAnswer = {this.props.correctAnswer}
          tempSubmittedAnswer = {this.props.tempSubmittedAnswer}
          updateSubmittedAnswer={this.props.updateSubmittedAnswer}
          submittedAnswer = {this.props.submittedAnswer}  
        />
        { (this.props.whichButton === "next" && this.props.submittedAnswer !== this.props.correctAnswer) &&
          <CorrectAnswer
            correctAnswer={this.props.correctAnswer}
          />
        }
      </>
    )
  }
}

export default AnswerField
