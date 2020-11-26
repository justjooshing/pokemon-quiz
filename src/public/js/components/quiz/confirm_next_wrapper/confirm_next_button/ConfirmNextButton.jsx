import React, { Component } from 'react'

export class ConfirmNextButton extends Component {

  render() {
    const { round } = this.props;
    const nextQuestion = () => {
      if (round < 9) {
        this.props.roundCounter()
      } else {console.log("yoyoyoyo")}
    }

    return (
      <div className="quiz_confirm_button" onClick={() => nextQuestion()}>
        <p className="quiz_confirm_button_text">Confirm</p>
      </div>
    )
  }
}

export default ConfirmNextButton
