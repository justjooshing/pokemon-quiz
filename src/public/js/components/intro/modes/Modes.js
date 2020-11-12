const React = require("react");
const ModeButton = require("./ModeButton");
const PropTypes = require("prop-types");

class Modes extends React.Component {
  render() {
    return (
      <div className="modes_wrapper">
        {this.props.modes.map((mode) => (
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

module.exports = Modes;
