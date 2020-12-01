import React, { Component } from 'react'

export class AnswerInput extends Component {
  render() {
    const {whichButton, correctAnswer, tempSubmittedAnswer, updateSubmittedAnswer, submittedAnswer} = this.props
    return (
      <div className="answer_input_wrapper">
        <input 
          type="text" 
          required 
          className= {
            (whichButton === "next" && correctAnswer === submittedAnswer) ? "answer_input_correct" :
            whichButton === "next" ? "answer_input_incorrect" : 
            "answer_input"} 
            id="submittedAnswer" 
            placeholder="Your answer here..." 
            value={tempSubmittedAnswer} 
            onChange={updateSubmittedAnswer}
          />
      </div>
    )
  }
}

export default AnswerInput
