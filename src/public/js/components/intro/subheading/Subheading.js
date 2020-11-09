const React = require("react");

class Subheading extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h5 className="subheading_text">
          So you think you're the ultimate pokemon master?
        </h5>
        <h5 className="subheading_text">
          Prove it by selecting an option below:
        </h5>
      </React.Fragment>
    );
  }
}

module.exports = Subheading;
