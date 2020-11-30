import React from "react"

import headerTitleUltimate from "../../../../../images/heading_breakdown/Ultimate.png"
import headerTitlePokemon from "../../../../../images/heading_breakdown/Pokemon.png"
import headerTitleQuiz from "../../../../../images/heading_breakdown/Quiz.png"

function Heading() {
  return (
    <div className="heading_wrapper">
      <img className="heading_title_images" src={headerTitleUltimate} alt="Ultimate"/>
      <img className="heading_title_images" src={headerTitlePokemon} alt="Pokemon"/> 
      <img className="heading_title_quiz" src={headerTitleQuiz} alt="Quiz"/>
    </div>
  );
}

export default Heading;
