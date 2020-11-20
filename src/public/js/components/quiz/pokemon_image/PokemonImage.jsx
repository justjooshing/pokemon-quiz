import React from'react'

class PokemonImage extends React.Component {
  render() {
    const { pokemon } = this.props
    return (
      <div className="pokemon_image_wrapper">
      <img className="pokemon_image" src={pokemon.image} alt={pokemon.name} />
      </div>
    )
  }
}

export default PokemonImage;