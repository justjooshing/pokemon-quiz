import React from "react";

class  InstructionsContinueButton extends React.Component {
  render() {
    const {pokeball, questionsReady} = this.props
    if (questionsReady) {
      return (
          <button 
            className= "instructions_continue_button_loaded"
            onClick={() => this.props.generatePossibleAnswers()}
            ><h2 className="instructions_continue_button_text_loaded">CONTINUE</h2>
          </button>
      )
    } else {
      return (
        <button 
        className= "instructions_continue_button_loading"
      ><h2 className="instructions_continue_button_text_loading">Loading...</h2>
      <img src={pokeball} alt="pokeball" className="instructions_pokeball"/>
      </button>
      )
    }
  }
}

export default InstructionsContinueButton;
