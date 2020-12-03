import React, { Component } from 'react'

import AnswerField from "./answer_field/AnswerField";
import HardConfirmButton from "./hard_confirm_button/HardConfirmButton";

export class AnswerConfirmWrapper extends Component {
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
      if (this.state.submittedAnswer) {
        this.setState({
          whichButton: "next"
        })
      } else if (this.state.tempSubmittedAnswer) {
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
      let submittedAnswer = this.state.tempSubmittedAnswer;

      //topic will either be "name" or "type"
      const correctAnswer = this.props.pokemon[this.props.topic];

      if (submittedAnswer === correctAnswer) {
        this.props.scoreCounter();
      } else if (submittedAnswer.includes("/")) {
        submittedAnswer = submittedAnswer.split("/").reverse().join("/");
        if (submittedAnswer === correctAnswer) {
          this.props.scoreCounter();
        }
      }
      this.setState({
        whichButton: "next",
        correctAnswer,
        submittedAnswer
      })
  }
  
  nextQuestion = () => {
    if (this.props.round < 9) {
      this.props.roundCounter()
    } else {
      this.props.endQuiz()
    }
   
    //setState for next question and reset "tempSubmittedAnswer"
    this.setState({
      whichButton: "skip",
      tempSubmittedAnswer: "",
      submittedAnswer: ""
    })
  }
  
  render() {
    return (
      <form className="answer_confirm_wrapper" onSubmit={(e) => e.preventDefault()}>
        <AnswerField
          topic = {this.props.topic}
          tempSubmittedAnswer = {this.state.tempSubmittedAnswer}
          updateSubmittedAnswer={this.updateSubmittedAnswer}
          submittedAnswer = {this.state.submittedAnswer}
          whichButton = {this.state.whichButton}
          correctAnswer = {this.state.correctAnswer}
        />
        <HardConfirmButton
          whichButton = {this.state.whichButton}
          checkAnswer = {this.checkAnswer}
          nextQuestion = {this.nextQuestion}
        />
      </form>
    )
  }
}
export default AnswerConfirmWrapper;
