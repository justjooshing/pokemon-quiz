import React, { Component } from 'react'
import { withRouter } from "react-router"

export class StartOverButton extends Component {

  goToStart = () => {
    this.props.history.push("/")
    this.props.startOver();
  }

  render() {
    return (
      <div className="start_over_button_wrapper">
        <div className="start_over_button">
          <p className="start_over_button_text" onClick={() => this.goToStart()}>Start Over</p>
        </div>
      </div>
    )
  }
}

export default withRouter(StartOverButton)
