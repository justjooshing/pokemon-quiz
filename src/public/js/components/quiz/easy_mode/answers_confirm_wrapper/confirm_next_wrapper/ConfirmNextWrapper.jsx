import React, { Component } from "react";
import ConfirmNextButton from "./confirm_next_button/ConfirmNextButton";

export class ConfirmNextWrapper extends Component {
  render() {
    return (
      <div className="quiz_confirm_next_wrapper">
        <ConfirmNextButton
          whichButton={this.props.whichButton}
          checkAnswer={this.props.checkAnswer}
          nextQuestion={this.props.nextQuestion}
          skipQuestion={this.props.skipQuestion}
        />
      </div>
    );
  }
}

export default ConfirmNextWrapper;
