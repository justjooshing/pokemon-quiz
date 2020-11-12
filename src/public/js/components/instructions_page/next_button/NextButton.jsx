const React = require("react");
const { Link } = require("react-router-dom")

function NextButton() {
  return (
    <React.Fragment>
      <Link to="../quiz/Quiz" className="instructions_next_button"><h2 className="instructions_next_button__words">CONTINUE</h2></Link>
    </React.Fragment>
  );
}

module.exports = NextButton;
