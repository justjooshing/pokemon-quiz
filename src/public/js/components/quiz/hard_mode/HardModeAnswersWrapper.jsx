import React, { Component } from 'react'
import AnswerField from "./answer_field/AnswerField";
import HardConfirmButton from "./hard_confirm_button/HardConfirmButton";

export class HardMode extends Component {
  state = {
    whichButton: "skip",
    tempSubmittedAnswer: "",
    submittedAnswer: "",
    correctAnswer: this.props.pokemon[this.props.topic]
  }

  updateSubmittedAnswer = (e) => {
    let inputAnswer = e.target.value;
    inputAnswer = inputAnswer.toLowerCase()
    this.setState({
      tempSubmittedAnswer: inputAnswer
    }, () => {
      if (this.state.tempSubmittedAnswer) {
        this.setState({
          whichButton: "confirm"
        })
      } else {
        this.setState({
          whichButton: "skip"
        })
      }
    })
  }

  checkAnswer = () => {
    this.setState({
      submittedAnswer: this.state.tempSubmittedAnswer
    }, () => {
      this.state.submittedAnswer === this.state.correctAnswer ? console.log('yeah boi') : console.log("nah soz");
      this.props.roundCounter();
      this.setState({
      })
    })
  }

  render() {
    return (
      <>
        <AnswerField
          updateSubmittedAnswer={this.updateSubmittedAnswer}
        />
        <HardConfirmButton
          whichButton = {this.state.whichButton}
          checkAnswer = {this.checkAnswer}
        />
      </>
    )
  }
}

export default HardMode
