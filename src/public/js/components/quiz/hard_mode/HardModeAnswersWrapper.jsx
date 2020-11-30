import React, { Component } from 'react'
import AnswerField from "./answer_field/AnswerField";
import HardConfirmButton from "./hard_confirm_button/HardConfirmButton";

export class HardMode extends Component {
  state = {
    whichButton: "skip",
    submittedAnswer: "",
    correctAnswer: this.props.pokemon[this.props.topic]
  }

  submittedAnswer = (e) => {
    let inputAnswer = e.target.value;
    inputAnswer = inputAnswer.toLowerCase()
    this.setState({
      submittedAnswer: inputAnswer
    })
    if (this.state.submittedAnswer) {
      this.setState({
        whichButton: "next"
      })
    } else {
      this.setState({
        whichButton: "skip"
      })
    }
  }

  render() {
    return (
      <>
        <AnswerField
        submittedAnswer={this.submittedAnswer}/>
        <HardConfirmButton
        whichButton = {this.state.whichButton}/>
      </>
    )
  }
}

export default HardMode
