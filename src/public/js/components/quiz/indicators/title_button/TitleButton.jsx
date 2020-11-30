import React, { Component } from 'react'
import { Link }  from"react-router-dom"

export class TitleButton extends Component {
  render() {
    return (
      <Link className="title_button" to="/" onClick={() => this.props.startOver()}>
        Ultimate Pokemon Quiz
      </Link>
    )
  }
}

export default TitleButton
