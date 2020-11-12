const React = require('react');
const PropTypes = require("prop-types");

 class Instructions extends React.Component {
  render() {
    // const {setMode, modes} = this.props;
    // const instructionSet = modes.filter((mode) => { mode.type !== setMode})

    // console.log(instructionSet)
  
    if (this.props.setMode === "easy") {
    return (
        <div className="instructions_wrapper">
          <p>Here are the easy instructions</p>
          <p>Here are the easy instructions</p>
          <p>Here are the easy instructions</p>
          <p>Here are the easy instructions</p>
          <p>Here are the easy instructions</p>
          <p>Here are the easy instructions</p>
          <p>Here are the easy instructions</p>
        </div>
    )
    } else if (this.props.setMode === "hard") {
      return (
        <div className="instructions_wrapper">
          <p>Here are the hard instructions</p>
          <p>Here are the hard instructions</p>
          <p>Here are the hard instructions</p>
          <p>Here are the hard instructions</p>
          <p>Here are the hard instructions</p>
          <p>Here are the hard instructions</p>
        </div>
      )
    }
  }
}

Instructions.propTypes = {
  setMode: PropTypes.string.isRequired
} 

module.exports = Instructions;
