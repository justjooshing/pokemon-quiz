import React from "react"
import { Link } from "react-router-dom"

function NextButton(props) {
  return (
    <>
      <Link 
        to="../quiz/Quiz" 
        className="instructions_next_button" 
        onClick={() => props.generatePossibleAnswers()}
        ><h2 className="instructions_next_button__words">CONTINUE</h2>
      </Link>
    </>
  );
}

export default NextButton;
