import React  from"react"
import PropTypes  from"prop-types"

class ModeButton extends React.Component {
  render() {
    return (
      <button
        className="modes_options"
        onClick={() => this.props.selectMode(this.props.mode.type)}
      >
      <h2 className="mode_heading">{this.props.mode.button_heading}</h2>
      <p>{this.props.mode.button_paragraph}</p>
      </button>
    );
  }
}

ModeButton.propTypes = {
  mode: PropTypes.object.isRequired,
  selectMode: PropTypes.func.isRequired
};
export default ModeButton;
