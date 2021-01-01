import React, { Component } from "react";
import AnswerButton from "./AnswerButton/AnswerButton";

export class AnswersWrapper extends Component {
  render() {
    const {
      answers,
      isSelected,
      selectedAnswer,
      whichButton,
      correctAnswer,
    } = this.props;
    return (
      <div className="quiz_answers_wrapper">
        {answers.map((answer) => (
          <AnswerButton
            key={answers.indexOf(answer)}
            answer={answer}
            isSelected={isSelected}
            selectedAnswer={selectedAnswer}
            whichButton={whichButton}
            correctAnswer={correctAnswer}
          />
        ))}
      </div>
    );
  }
}

export default AnswersWrapper;
