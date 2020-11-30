import React, { Component } from 'react'

export class HardConfirmButton extends Component {
  render() {
    return (
      <div className="quiz_confirm_next_wrapper">
        <button type="button" className="quiz_confirm_button" 
        //onClick={() => this.props.checkAnswer()}
        >
            <span className="quiz_confirm_button_text">{this.props.whichButton}</span>
          </button>
      </div>
    )
  }
}

export default HardConfirmButton
