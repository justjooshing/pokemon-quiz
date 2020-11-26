import React from 'react'

export class Question extends React.Component {
  render() {
    return (
      <>
      <p className="quiz_pokemon_question">
        In front of you is a Pokemon.
      </p>
      <p className="quiz_pokemon_question">
        Name the {this.props.topic}.
      </p>
      </>
    )
  }
}

export default Question
