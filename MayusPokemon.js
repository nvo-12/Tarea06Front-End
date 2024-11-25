let pokemon =
[
   'Pikachu',
   'Charmander',
   'Bulbasaur',
   'Squirtle'
]

// Función para convertir un arreglo de strings a mayúsculas usando forEach
const convertirAMayusculas = (arreglo) => {
   const mayusculasArray = [];

   arreglo.forEach(elemento => {
       mayusculasArray.push(elemento.toUpperCase());
   });

   return mayusculasArray;
};

const mayusculasArray = convertirAMayusculas(pokemon);

//imprimir el arreglo 
console.log(mayusculasArray);