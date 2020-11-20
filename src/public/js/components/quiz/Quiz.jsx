import React from "react";
import PropTypes from "prop-types";

import Indicators from "./indicators/Indicators";
import PokemonImage from "./pokemon_image/PokemonImage";
import Question from "./question/Question"

class Quiz extends React.Component {
  render() {
    const {pokemonSet , round} = this.props;
    if (!pokemonSet) {
      return (
        <></>
      )
    }
    
    if (pokemonSet) {
      let pokemon = pokemonSet[round];
      console.log(pokemonSet)
      return (
        <div>
          <Indicators 
            round={round}
            setMode={this.props.setMode} 
            modes={this.props.modes}
          />
          <PokemonImage pokemon={pokemon}/>
          <Question />
          {/* <Answer
          // add conditional rendering in here
          />
          <Confirm_Next /> */}
        </div>
      );
    }
  }
}

Quiz.propTypes = {
  round: PropTypes.number.isRequired
} 


export default Quiz;
