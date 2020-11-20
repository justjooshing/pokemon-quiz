import React from "react"
import PropTypes from "prop-types"

import Indicators from "./indicators/Indicators"
import PokemonImage from "./pokemon_image/PokemonImage"

class Quiz extends React.Component {
  render() {
    const {pokemonSet , round} = this.props;

    console.log(pokemonSet[round])
    return (
      <div>
        <Indicators 
          round={round}
          setMode={this.props.setMode} 
          modes={this.props.modes}
        />
        {/* <PokemonImage pokemon={pokemonSet[round]}/> */}
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
