import React, { Component } from 'react'
import AnswerButton from "./AnswerButton/AnswerButton"

const shuffle = (array) => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

export class AnswersWrapper extends Component {
  isSelected = () => {
    
  }

  render() {
    let {answers} = this.props;
    
    //Mix up all the possible answers
    shuffle(answers)

    return (
      <div className="quiz_answers_wrapper">
        {answers.map(answer => 
        <AnswerButton 
          key = {answers.indexOf(answer)}
          answer = {answer}
        />
        ) 
      }
      </div>
    )
  }
}

export default AnswersWrapper
