import axios from 'axios'

const getPokemonSvg = async(id = 1) =>{
    const pokemonSvg = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`)
                            .then((response) => response.text());   
    return pokemonSvg;
}

export default getPokemonSvg;
