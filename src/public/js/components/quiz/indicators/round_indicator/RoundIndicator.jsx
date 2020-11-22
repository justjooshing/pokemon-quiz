import React from 'react'
import PropTypes from "prop-types"

class RoundIndicator extends React.Component {
  render() {
    return (
      <div className="round_indicator">
        {`${this.props.round}/10`}
      </div>
    )
  }
}

RoundIndicator.propTypes = {
  round: PropTypes.number.isRequired
} 


export default RoundIndicator;
