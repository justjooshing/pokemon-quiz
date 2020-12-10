import React, { Component } from 'react'

export class HardConfirmButton extends Component {
  render() {
    const {whichButton} = this.props
    return (
      <div className="quiz_confirm_next_wrapper">
        <button type="submit" className="quiz_confirm_button" 
          onClick={whichButton === "confirm" ? () => this.props.checkAnswer() : () => this.props.nextQuestion()}
        >
          <span className="quiz_confirm_button_text">{whichButton}</span>
        </button>
      </div>
    )
  }
}

export default HardConfirmButton
