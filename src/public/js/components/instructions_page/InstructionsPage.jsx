import React  from "react"
import NextButton  from "./next_button/NextButton"
import Instructions  from "./instructions/Instructions"
import ModeIndicator  from "../mode_indicator/ModeIndicator"
import PropTypes  from "prop-types"

class InstructionsPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ModeIndicator setMode={this.props.setMode} modes={this.props.modes}/>
        <Instructions setMode={this.props.setMode} modes={this.props.modes}/>
        <NextButton 
          generateQuestions={this.props.generateQuestions} 
          //pokemon={this.props.pokemon}
        />
      </React.Fragment>
    );
  }
}

InstructionsPage.propTypes = {
  setMode: PropTypes.string.isRequired
} 

export default InstructionsPage;
