const React = require('react');
const {BrowserRouter: Router, Route} = require("react-router-dom")

const Heading = require("../intro/heading/Heading");
const Subheading = require("../intro/subheading/Subheading")
const Modes = require("../intro/modes/Modes");
const InstructionsPage = require("../instructions_page/InstructionsPage")

class App extends React.Component {
  state = {
    setMode: "",
    modes: {
      easy:  {
          id: "1",
          type: "easy",
          button_heading: "EASY",
          button_paragraph: "For pokemon masters in training",
          instructions: [
            "You will be presented with 10 questions.",
            "One at a time.",
            "You will be shown a picture of a pokemon and a question.",
            "You will also be given four answer options.",
            "Read the question carefully.",
            "Select the appropriate answer.",
          ],
        },
      hard:  {
          id: "2",
          type: "hard",
          button_heading: "HARD",
          button_paragraph: "For experienced pokemon masters",
          instructions: [
            "You will be presented with 10 questions.",
            "One at a time.",
            "You will be shown a picture of a pokemon and a question.",
            "Read the question carefully.",
            "Submit your answer in the textbox provided.",
          ],
        }
    }
  }

   selectMode = (mode) => {
    this.setState({
      setMode: mode    
    })
  }


  render() {
    return (
      <Router>
        <Route
        exact
        path="/"
        render={() => (
          <React.Fragment>
            <Heading />
            <Subheading />
            <Modes selectMode={this.selectMode} modes={this.state.modes}/>
          </React.Fragment>
          )}
        />
        <Route 
          path="/instructions"
          render={() => (
            <React.Fragment>
              <InstructionsPage setMode={this.state.setMode} modes={this.state.modes}/>
          </React.Fragment>
          )}
        />
        <Route 
          path="/quiz"
          render={() => (
            <React.Fragment>
              <Quiz />
          </React.Fragment>
          )}
        />
      </Router>
    )
  }
}

module.exports = App;
