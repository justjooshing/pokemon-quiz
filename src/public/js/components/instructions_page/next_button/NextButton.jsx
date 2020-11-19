import React from "react"
import { Link } from "react-router-dom"

function NextButton(props) {
  return (
    <React.Fragment>
      <Link 
        to="../quiz/Quiz" 
        className="instructions_next_button" 
        onClick={() => props.generateQuestions()}
        ><h2 className="instructions_next_button__words">CONTINUE</h2>
      </Link>
    </React.Fragment>
  );
}

export default NextButton;
