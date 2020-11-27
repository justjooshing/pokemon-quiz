import { lowerCase } from 'lodash';
import React, { Component } from 'react'

const capitaliseFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export class AnswerButton extends Component {

  render() {
    let { answer, selectedAnswer, whichButton, correctAnswer } = this.props;
    const lowerCaseSelectedAnswer = selectedAnswer.toLowerCase();
    const upperCaseAnswer = capitaliseFirstLetter(answer)

    if (whichButton === "next") {
      return (
        <div 
          className={
            answer === correctAnswer ? 
            "quiz_answer_buttons_correct" 
            : (answer === lowerCaseSelectedAnswer) && (answer !== correctAnswer) ? "quiz_answer_buttons_incorrect"
            : "quiz_answer_buttons"
          }
          >
          {upperCaseAnswer}
        </div>
      )
    } else {
      return (
        <div 
          className={
            answer === lowerCaseSelectedAnswer ? "quiz_answer_buttons_selected" : 
            "quiz_answer_buttons" }
          onClick={() => this.props.isSelected(answer)
          }>
          {upperCaseAnswer}
        </div>
      )
    } 
  }
}

export default AnswerButton
