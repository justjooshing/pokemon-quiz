import React, { Component } from 'react'
import AnswerButton from "./AnswerButton/AnswerButton"

export class AnswersWrapper extends Component {

  render() {
  const {answers} = this.props;
    return (
      <div className="quiz_answers_wrapper">
        {answers.map(answer => 
        <AnswerButton 
          key = {answers.indexOf(answer)}
          answer = {answer}
          isSelected = {this.props.isSelected}
          selectedAnswer={this.props.selectedAnswer}
        />
        ) 
      }
      </div>
    )
  }
}

export default AnswersWrapper
