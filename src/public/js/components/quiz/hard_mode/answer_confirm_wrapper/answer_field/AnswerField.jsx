import React, { Component } from 'react'

import TypeDirective from "./type_directive/TypeDirective";
import AnswerInput from "./answer_input/AnswerInput"


export class AnswerField extends Component {
  render() {
    return (
      <>
        <TypeDirective/>
        <AnswerInput
        tempSubmittedAnswer = {this.props.tempSubmittedAnswer}
        updateSubmittedAnswer={this.props.updateSubmittedAnswer}/>
        {/* <CorrectAnswer/> */}
      </>
    )
  }
}

export default AnswerField
