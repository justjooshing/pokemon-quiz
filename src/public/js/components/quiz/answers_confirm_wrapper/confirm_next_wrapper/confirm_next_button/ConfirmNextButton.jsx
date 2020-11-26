import React, { Component } from 'react'

export class ConfirmNextButton extends Component {

  render() {
    if (this.props.whichButton === "confirm") {
      return (
        <div className="quiz_confirm_button" onClick={() => this.props.checkAnswer()}>
          <p className="quiz_confirm_button_text">{this.props.whichButton}</p>
        </div>
      )
    } else { //displays skip and next
      return (
        <div className="quiz_confirm_button" onClick={() => this.props.nextQuestion()}>
          <p className="quiz_confirm_button_text">{this.props.whichButton}</p>
        </div>
      )
    }
  }
}

export default ConfirmNextButton
