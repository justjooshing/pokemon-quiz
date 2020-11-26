import React, { Component } from 'react'

const capitaliseFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export class AnswerButton extends Component {

  render() {
    let { answer, selectedAnswer } = this.props;
    answer = capitaliseFirstLetter(answer)
    return (
      <div 
        className={answer===selectedAnswer ? "quiz_answer_buttons_selected" : "quiz_answer_buttons" }
        onClick={() => this.props.isSelected(answer)
        }>
        {answer}
      </div>
    )
  }
}

export default AnswerButton
