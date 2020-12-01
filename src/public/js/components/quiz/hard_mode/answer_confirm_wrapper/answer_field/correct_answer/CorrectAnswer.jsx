import React, { Component } from 'react'

export class CorrectAnswer extends Component {
  render() {
    
  const capitaliseFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
  }
  let correctAnswer = this.props.correctAnswer;
  correctAnswer = capitaliseFirstLetter(correctAnswer)

    return (
      <div className="correct_answer_wrapper">
        <div className="correct_answer_text">
          {correctAnswer}
        </div>
      </div>
    )
  }
}

export default CorrectAnswer
