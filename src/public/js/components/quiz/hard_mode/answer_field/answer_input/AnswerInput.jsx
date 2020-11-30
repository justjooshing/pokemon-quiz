import React, { Component } from 'react'

export class AnswerInput extends Component {
  render() {
    return (
      <div className="answer_input_wrapper">
        <input type="text" required className="answer_input" id="submittedAnswer" placeholder="Your answer here..." onChange={this.props.submittedAnswer}/>
      </div>
    )
  }
}

export default AnswerInput
