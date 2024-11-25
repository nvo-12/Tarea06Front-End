//Fibonacci entre 0 y 1000
const fibonacci = () => {
    let a = 0, b = 1;
    const result = [a];

    while (b <= 1000) {
        result.push(b); 
        const c = a + b;
        a = b;
        b = c; 
    }

    return result; 
};

// Llamamos a la función y mostramos los resultados
console.log(fibonacci());

//Fibonacci pares entre 0 y 1000
const fibonacci2 = () => {
    let a = 0, b = 1;
    const result = [];

    while (b <= 1000) {
        if (b % 2 === 0) {
            result.push(b); 
        }
        const c = a + b;
        a = b;
        b = c; 
    }

    return result; 
};
// Llamamos a la función y mostramos los resultados
console.log(fibonacci2());

//Fibonacci impares entre 0 y 1000
const fibonacci3 = () => {
    let a = 0, b = 1;
    const result = [];

    while (b <= 1000) {
        if (b % 2 != 0) {
            result.push(b); 
        }
        const c = a + b;
        a = b;
        b = c; 
    }

    return result; 
};
// Llamamos a la función y mostramos los resultados
console.log(fibonacci3());