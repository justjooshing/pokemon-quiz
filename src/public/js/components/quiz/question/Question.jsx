import React from 'react'

export class Question extends React.Component {
  render() {
    const questionTopic = ['Pokemon', 'type'];
    const chosenTopic = questionTopic[Math.floor(Math.random() * 2)]
    return (
      <>
      <h2 className="quiz_pokemon_question">
        In front of you is a Pokemon.
      </h2>
      <h2 className="quiz_pokemon_question">
        Name the {chosenTopic}.
      </h2>
      </>
    )
  }
}

export default Question
