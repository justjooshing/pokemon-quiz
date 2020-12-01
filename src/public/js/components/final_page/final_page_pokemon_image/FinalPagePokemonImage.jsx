import React, { Component } from 'react';

import seven_and_up from "../../../../../images/final_page/pokemon_ash_final_page_image.jpg"
import under_seven from "../../../../../images/final_page/pikachu_under_7.jpg"
import under_four from "../../../../../images/final_page/pikachu_under_4.jpg"
export class FinalPagePokemonImage extends Component {
  render() {
    const {score} = this.props
    return (
      <div className="final_page_image_wrapper">
        <img 
          className="final_page_image" 
          src={score <4 ? under_four : score <7 ? under_seven :
            seven_and_up}
          alt={ score <4 ? "pikachu defeated" : score <7 ? "pikachu looking confused" : "ash from pokemon success image"}
        />
      </div>
    )
  }
}

export default FinalPagePokemonImage
