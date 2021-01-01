import React, { Component } from "react";

export class ConfirmNextButton extends Component {
  render() {
    const { whichButton } = this.props;
    return (
      <button
        type="button"
        className="quiz_confirm_button"
        onClick={
          whichButton === "confirm"
            ? () => this.props.checkAnswer()
            : () => this.props.nextQuestion()
        }
      >
        <span className="quiz_confirm_button_text">{whichButton}</span>
      </button>
    );
  }
}

export default ConfirmNextButton;
