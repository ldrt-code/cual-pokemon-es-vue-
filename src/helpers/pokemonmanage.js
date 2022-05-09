import pokemonApi from "@/api/pokemonApi"; 

const pokemonIDS = () => {
    let pokemons = Array.from(Array(650));
        return pokemons.map((_ ,index) => index+1);
}

const getPokemonOptions = async(limit = 4) =>{
    let pokeList = pokemonIDS()
        .sort( () => Math.random() - 0.5 )
        .splice(0, limit);
        /*  MAP SIRVE PARA EDITAR LOS VALORES DE UN ARREGLO */ 
    pokeList = pokeList.map((cont, index) => pokemonApi.get(`${ cont }`));

    let ret = await getPokemonsName( pokeList); 
    return ret; 
    
}

const getPokemonsName = async( pokeList ) => {
                /*  SORT ORDENA LOS VALORES DE UN ARREGLO   */
    
    let pokeApiReturn = await Promise.all(pokeList);
    
    let pokeData = Array();
    pokeApiReturn.forEach(({data}) => {
        const {name, id} = data
        pokeData.push(
            {name, id}
        );
    })
    
    return pokeData; 
}


export default getPokemonOptions;