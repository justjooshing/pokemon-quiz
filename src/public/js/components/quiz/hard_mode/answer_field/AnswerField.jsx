import React, { Component } from 'react'

import TypeDirective from "./type_directive/TypeDirective";


export class AnswerField extends Component {
  render() {
    return (
      <>
        <TypeDirective/>
        {/* <AnswerInput/>
        <CorrectAnswer/> */}
      </>
    )
  }
}

export default AnswerField
