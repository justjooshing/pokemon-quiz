import React, { Component } from 'react'

import AnswersWrapper from "./answers_wrapper/AnswersWrapper"
import ConfirmNextWrapper from "./confirm_next_wrapper/ConfirmNextWrapper"

export class AnswersConfirmWrapper extends Component {
  state = {
    selectedAnswer: "",
    whichButton: "skip"
  }

  checkAnswer = () => {
    const givenAnswer = this.state.selectedAnswer.toLowerCase();
    const answerToCompare = this.props.pokemon[this.props.topics];
    if (givenAnswer === answerToCompare) {
      console.log("correct")
    } else (console.log("incorrect"));

    this.setState({
      whichButton: "next"
    })
  }

  nextQuestion = () => {
    if (this.props.round < 9) {
      this.props.roundCounter()
    } else {console.log("yoyoyoyo")}

    //Reset selection option border class
    () => this.state.isSelected("");

    //setState for next question
    this.setState({
      whichButton: "skip"
    })
  }
  
  isSelected = (answer) => {
    this.setState({
      selectedAnswer: answer,
      whichButton: "confirm"
    }, () => console.log(this.state.selectedAnswer))
  }

  render() {    
    return (
      <div>
        <AnswersWrapper
          answers = {this.props.answers}
          isSelected = {this.isSelected}
          selectedAnswer={this.state.selectedAnswer}
        />
        <ConfirmNextWrapper 
          whichButton={this.state.whichButton}
          checkAnswer={this.checkAnswer}
          nextQuestion={this.nextQuestion}
          skipQuestion={this.skipQuestion}
          />
      </div>
    )
  }
}

export default AnswersConfirmWrapper
