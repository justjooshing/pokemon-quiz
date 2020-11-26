import React, { Component } from 'react'

const capitaliseFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export class AnswerButton extends Component {

  render() {
    let { answer } = this.props;
    answer = capitaliseFirstLetter(answer)
    return (
      <div className = "quiz_answer_buttons">
        {answer}
      </div>
    )
  }
}

export default AnswerButton
