import React, { Component } from 'react'

import AnswersWrapper from "./answers_wrapper/AnswersWrapper"
import ConfirmNextWrapper from "./confirm_next_wrapper/ConfirmNextWrapper"

export class AnswersConfirmWrapper extends Component {
  state = {
    selectedAnswer: "",
    whichButton: "skip",
    correctAnswer: this.props.pokemon[this.props.topics]
  }

  checkAnswer = () => {

    const {selectedAnswer} = this.state;
    
    //topics will either be "name" or "type"
    const correctAnswer = this.props.pokemon[this.props.topics];
    if (selectedAnswer === correctAnswer) {
      this.props.scoreCounter()}

    this.setState({
      whichButton: "next",
      correctAnswer
    })
  }

  nextQuestion = () => {
    if (this.props.round < 9) {
      this.props.roundCounter()
    } else {console.log("Out of questions/End of quiz")}

    //setState for next question and reset "selectedAnswer"
    this.setState({
      whichButton: "skip",
      selectedAnswer: ""
    })
  }
  
  isSelected = (answer) => {
    this.setState({
      selectedAnswer: answer,
      whichButton: "confirm"
    })
  }

  render() {    
    return (
      <div>
        <AnswersWrapper
          answers = {this.props.answers}
          isSelected = {this.isSelected}
          selectedAnswer={this.state.selectedAnswer}
          whichButton={this.state.whichButton}
          correctAnswer={this.state.correctAnswer}
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
