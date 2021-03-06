import React from 'react'
import PropTypes from "prop-types"

 class Instructions extends React.Component {
  render() {
    const {setMode, modes} = this.props; 
      if (setMode === modes[setMode].type) {
      return (
          <div className="instructions_wrapper">
            {modes[setMode].instructions.map((line) => 
              <p 
              key={modes[setMode].instructions.indexOf(line)} 
              className="instructions_lines">
                {line}
              </p>
            )}
          </div>
    )
    }
  }
}

Instructions.propTypes = {
  setMode: PropTypes.string.isRequired
} 

export default Instructions;
