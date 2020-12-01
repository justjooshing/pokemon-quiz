import React, { Component } from 'react'
import FinalPagePokemonImage from './final_page_pokemon_image/FinalPagePokemonImage';
import FinalPageScore from "./final_page_score/FinalPageScore";
import FinalPageText from "./final_page_text/FinalPageText";
import StartOverButton from "./start_over_button/StartOverButton";

export class FinalPage extends Component {
  render() {
    const { score } = this.props
    return (
      <div>
        <FinalPageScore
          score = {score}
        />
        <FinalPagePokemonImage 
          score = {score}
        />
        <FinalPageText 
          setMode = {this.props.setMode}
          score = {score}
          />
        <StartOverButton 
          startOver = {this.props.startOver}
        />
      </div>
    )
  }
}

export default FinalPage
