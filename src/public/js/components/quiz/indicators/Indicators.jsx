import React from 'react'

import RoundIndicator from "./round_indicator/RoundIndicator"
import ModeIndicator from "../../mode_indicator/ModeIndicator"
import TitleButton from "./title_button/TitleButton.jsx"


class Indicators extends React.Component {
  render() {
    return (
      <div className="indicators_wrapper">
        <ModeIndicator 
          setMode={this.props.setMode} 
          modes={this.props.modes}
        /> 
        <TitleButton />
        <RoundIndicator round={this.props.round}/>
      </div>
    )
  }
}

export default Indicators
