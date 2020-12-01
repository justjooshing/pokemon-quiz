import React, { Component } from 'react'

import TypeDirective from "./type_directive/TypeDirective";
import AnswerInput from "./answer_input/AnswerInput"


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
        {/* <CorrectAnswer/> */}
      </>
    )
  }
}

export default AnswerField
