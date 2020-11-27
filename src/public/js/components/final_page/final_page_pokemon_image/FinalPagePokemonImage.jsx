import React, { Component } from 'react';

export class FinalPagePokemonImage extends Component {
  render() {
    return (
      <div className="final_page_image_wrapper">
        
        {/* need to figure out how to pull in local images */}
        <img className="final_page_image" src={"https://pbs.twimg.com/profile_images/1261915181615132674/768bqBqX_400x400.jpg"} alt=""/>
      </div>
    )
  }
}

export default FinalPagePokemonImage
