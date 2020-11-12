const React = require("react");
const NextButton = require("./next_button/NextButton");
const Instructions = require("./instructions/Instructions");
const PropTypes = require("prop-types");

class InstructionsPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Instructions setMode={this.props.setMode} modes={this.props.modes}/>
        <NextButton />
      </React.Fragment>
    );
  }
}

InstructionsPage.propTypes = {
  setMode: PropTypes.string.isRequired
} 

module.exports = InstructionsPage;
