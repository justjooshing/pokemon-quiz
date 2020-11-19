import React from "react"
import PropTypes from "prop-types"

import Indicators from "./indicators/Indicators"
import PokemonImage from "./pokemon_image/PokemonImage"

class Quiz extends React.Component {
  render() {
    return (
      <div>
        <Indicators 
          round={this.props.round}
          setMode={this.props.setMode} 
          modes={this.props.modes}
        />
        {/* <PokemonImage pokemon={this.state.pokemon}/> */}
        {/* <img src={PokeSet.image} alt={`Image of ${PokeSet.name}`}/> */}
        {/* <Question />
        <Answer
        // add conditional rendering in here
        />
        <Confirm_Next /> */}
      </div>
    );
  }
}

Quiz.propTypes = {
  round: PropTypes.number.isRequired
} 


export default Quiz;
