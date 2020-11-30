import React, { Component } from 'react';
import pokemonImage from "../../../../../images/final_page/pokemon_ash_final_page_image.jpg"

export class FinalPagePokemonImage extends Component {
  render() {
    return (
      <div className="final_page_image_wrapper">
        <img className="final_page_image" src={pokemonImage} alt="ash from pokemon success image"/>
      </div>
    )
  }
}

export default FinalPagePokemonImage
