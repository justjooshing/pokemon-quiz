import React, { Component } from "react";

const capitaliseFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export class AnswerButton extends Component {
  render() {
    let { answer, selectedAnswer, whichButton, correctAnswer } = this.props;
    const upperCaseAnswer = capitaliseFirstLetter(answer);

    if (whichButton === "next") {
      return (
        <button
          type="button"
          className={
            answer === correctAnswer
              ? "quiz_answer_buttons_correct"
              : answer === selectedAnswer && answer !== correctAnswer
              ? "quiz_answer_buttons_incorrect"
              : "quiz_answer_buttons_post_selection"
          }
        >
          {upperCaseAnswer}
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className={
            answer === selectedAnswer
              ? "quiz_answer_buttons_selected"
              : "quiz_answer_buttons"
          }
          onClick={() => this.props.isSelected(answer)}
        >
          {upperCaseAnswer}
        </button>
      );
    }
  }
}

export default AnswerButton;
