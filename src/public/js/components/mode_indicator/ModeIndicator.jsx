import React from 'react'
import PropTypes from "prop-types"

class ModeIndicator extends React.Component {
  render() {
    const {setMode, modes} = this.props; 
    if (setMode === modes[setMode].type) {
    return (
      <div className="mode_indicator">
        {modes[setMode].button_heading}
      </div>
    )
    }
  }
}

ModeIndicator.propTypes = {
  setMode: PropTypes.string.isRequired
} 

export default ModeIndicator
