import React, { Component } from 'react'

export class AnswerInput extends Component {
  render() {
    return (
      <div className="answer_input_wrapper">
        <input type="text" required className="answer_input" id="submittedAnswer" placeholder="Your answer here..." value={this.props.tempSubmittedAnswer} onChange={this.props.updateSubmittedAnswer}/>
      </div>
    )
  }
}

export default AnswerInput
