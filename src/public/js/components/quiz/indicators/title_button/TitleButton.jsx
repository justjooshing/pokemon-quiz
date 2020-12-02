import React, { Component } from 'react'

export class TitleButton extends Component {
  render() {
    return (
      <button className="title_button" onClick={() => this.props.startOver()}>
        Ultimate Pokemon Quiz
      </button>
    )
  }
}

export default TitleButton
