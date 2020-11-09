const React = require('react');

const Heading = require("../intro/heading/Heading");
const Subheading = require("../intro/subheading/Subheading")

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading />
        <Subheading />
      </React.Fragment>
    )
  }
}

module.exports = App;
