const React = require('react');

const Heading = require("../intro/heading/Heading");
const Subheading = require("../intro/subheading/Subheading")
const Modes = require("../intro/modes/Modes")

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading />
        <Subheading />
        <Modes />
      </React.Fragment>
    )
  }
}

module.exports = App;
