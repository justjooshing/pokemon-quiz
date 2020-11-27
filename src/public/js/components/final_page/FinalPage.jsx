import React, { Component } from 'react'
import FinalPagePokemonImage from './final_page_pokemon_image/FinalPagePokemonImage';
import FinalPageScore from "./final_page_score/FinalPageScore";
import FinalPageText from "./final_page_text/FinalPageText";
import StartOverButton from "./start_over_button/StartOverButton";

export class FinalPage extends Component {
  render() {
    return (
      <div>
        <FinalPageScore
          score = {this.props.score}
        />
        <FinalPagePokemonImage />
        <FinalPageText />
        <StartOverButton 
          startOver = {this.props.startOver}
        />
      </div>
    )
  }
}

export default FinalPage
