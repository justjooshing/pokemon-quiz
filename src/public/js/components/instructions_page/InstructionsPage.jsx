import React  from "react"
import InstructionsContinueButton  from "./continue_button/InstructionsContinueButton"
import Instructions  from "./instructions/Instructions"
import ModeIndicator  from "../mode_indicator/ModeIndicator"
import PropTypes  from "prop-types"

class InstructionsPage extends React.Component {
  render() {
    return (
      <>
        <ModeIndicator setMode={this.props.setMode} modes={this.props.modes}/>
        <Instructions setMode={this.props.setMode} modes={this.props.modes}/>
        <InstructionsContinueButton 
          generatePossibleAnswers={this.props.generatePossibleAnswers} 
        />
      </>
    );
  }
}

InstructionsPage.propTypes = {
  setMode: PropTypes.string.isRequired
} 

export default InstructionsPage;
