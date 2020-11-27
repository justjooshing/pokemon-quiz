import React, { Component } from 'react'

export class FinalPageScore extends Component {
  render() {
    return (
      <h1 className="final_page_score">
        {this.props.score}/10
      </h1>
    )
  }
}

export default FinalPageScore
