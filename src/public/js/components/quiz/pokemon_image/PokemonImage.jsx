import React from'react'

class PokemonImage extends React.Component {
  render() {
    const { pokemon } = this.props
    return (
      <div>
       <img src={pokemon.image} alt={pokemon.name} />
      </div>
    )
  }
}

export default PokemonImage;