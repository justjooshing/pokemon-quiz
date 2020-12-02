import React from "react"

function InstructionsContinueButton (props) {
  return (
    <>
      <button  
        className="instructions_continue_button" 
        onClick={() => props.generatePossibleAnswers()}
        ><h2 className="instructions_continue_button_text">CONTINUE</h2>
      </button>
    </>
  );
}

export default InstructionsContinueButton ;
