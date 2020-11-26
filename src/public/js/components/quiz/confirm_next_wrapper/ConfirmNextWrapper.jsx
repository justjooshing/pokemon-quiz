import React, { Component } from 'react'
import ConfirmNextButton from "./confirm_next_button/ConfirmNextButton"


export class ConfirmNextWrapper extends Component {
  render() {
    return (
      <div className="quiz_confirm_next_wrapper">
        <ConfirmNextButton 
        round={this.props.round}
        roundCounter={this.props.roundCounter}
        />
      </div>
    )
  }
}

export default ConfirmNextWrapper
