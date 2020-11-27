import { lowerCase } from 'lodash';
import React, { Component } from 'react'

const capitaliseFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export class AnswerButton extends Component {

  render() {
    let { answer, selectedAnswer, whichButton, correctAnswer } = this.props;
    const lowerCaseAnswer = answer;
    const lowerCaseSelectedAnswer = selectedAnswer.toLowerCase();
    answer = capitaliseFirstLetter(answer)

    if (whichButton === "next") {
      return (
        <div 
          className={
            lowerCaseAnswer === correctAnswer ? 
            "quiz_answer_buttons_correct" 
            : (lowerCaseAnswer === lowerCaseSelectedAnswer) && (lowerCaseAnswer !== correctAnswer) ? "quiz_answer_buttons_incorrect"
            : "quiz_answer_buttons"
          }
          >
          {answer}
        </div>
      )
    } else {
      return (
        <div 
          className={
            lowerCaseAnswer === lowerCaseSelectedAnswer ? "quiz_answer_buttons_selected" : 
            "quiz_answer_buttons" }
          onClick={() => this.props.isSelected(answer)
          }>
          {answer}
        </div>
      )
    } 
  }
}

export default AnswerButton
