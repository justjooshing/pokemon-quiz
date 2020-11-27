import React from "react"
import { Link } from "react-router-dom"

function InstructionsContinueButton (props) {
  return (
    <>
      <Link 
        to="../quiz/Quiz" 
        className="instructions_continue_button" 
        onClick={() => props.generatePossibleAnswers()}
        ><h2 className="instructions_continue_button_text">CONTINUE</h2>
      </Link>
    </>
  );
}

export default InstructionsContinueButton ;
