import React, { Component } from 'react'
import { Link }  from"react-router-dom"

export class StartOverButton extends Component {

  render() {
    return (
      <div className="start_over_button_wrapper">
        <Link className="start_over_button" to="/" onClick={() => this.props.startOver()}>
          <span className="start_over_button_text">Start Over</span>
        </Link>
      </div>
    )
  }
}

export default StartOverButton
