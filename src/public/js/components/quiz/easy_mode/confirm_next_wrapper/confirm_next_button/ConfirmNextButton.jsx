import React, { Component } from 'react'

export class ConfirmNextButton extends Component {

  render() {
    if (this.props.whichButton === "confirm") {
      return (
        <button type="button" className="quiz_confirm_button" onClick={() => this.props.checkAnswer()}>
          <span className="quiz_confirm_button_text">{this.props.whichButton}</span>
        </button>
      )
    } else { //displays skip and next
      return (
        <button type="button" className="quiz_confirm_button" onClick={() => this.props.nextQuestion()}>
          <span className="quiz_confirm_button_text">{this.props.whichButton}</span>
        </button>
      )
    }
  }
}

export default ConfirmNextButton
