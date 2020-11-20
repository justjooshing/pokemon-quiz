import React from'react'

class PokemonImage extends React.Component {
  render() {
    const { pokemon } = this.props
    console.log(pokemon)
    return (
      <div>
       <img src={pokemon.image} alt={pokemon.name} />
      </div>
    )
  }
}

export default PokemonImage;