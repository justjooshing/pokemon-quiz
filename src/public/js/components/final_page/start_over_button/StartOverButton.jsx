import React, { Component } from 'react'
export class StartOverButton extends Component {

  render() {
    return (
      <div className="start_over_button_wrapper">
        <button className="start_over_button" onClick={() => this.props.startOver()}>
          <span className="start_over_button_text">Start Over</span>
        </button>
      </div>
    )
  }
}

export default StartOverButton
