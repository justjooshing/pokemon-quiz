const React = require("react");
const EasyMode = require("./easy_mode/EasyMode");
const HardMode = require("./hard_mode/HardMode");

class Modes extends React.Component {
  render() {
    return (
      <div className="modes_wrapper">
        <EasyMode />
        <HardMode />
      </div>
    );
  }
}

module.exports = Modes;
