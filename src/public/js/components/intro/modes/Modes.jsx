import React from "react"
import ModeButton from "./ModeButton"
import PropTypes from "prop-types"

class Modes extends React.Component {
  render() {
    return (
      <div className="modes_wrapper">
        {Object.values(this.props.modes).map((mode) => (
          <ModeButton
            key={mode.id}
            selectMode={this.props.selectMode}
            mode={mode}
          />
        ))}
      </div>
    );
  }
}

Modes.propTypes = {
  modes: PropTypes.object.isRequired,
  selectMode: PropTypes.func.isRequired,
};

export default Modes;
