let pokemon = [

    {
        nombre: 'Pikachu',
        tipo: 'Electrico'
    },
    {
        nombre: 'Charmander',
        tipo: 'Fuego',
    },
    {
        nombre: 'Bulbasaur',
        tipo: 'Planta'
    },
    {
        nombre: 'Squirtle',
        tipo: 'Agua'
    },
    {
        nombre: 'Charmeleon',
        tipo: 'Fuego'
    },
    {
        nombre: 'Weedle',
        tipo: 'bicho'
    },
    {
        nombre: 'Charizard',
        tipo: 'Fuego'
    }
]

const filtrarPokemonporTipo = (pokemon, tipo) => {
    let pokemonTipo = [];

    for (let i = 0; i < arreglo.length; i++) {
        const pokemon = arreglo[i];

        if (pokemon.type === tipo) {
            nombresFiltrados.push(pokemon.name);
        }
    }

    return nombresFiltrados;
};

//se llama la funcion con el tipo de pokemon que se quiere filtrar
const result = filtrarPokemonporTipo(pokemon, 'Fuego');
//imprimir el resultado
console.log(result);