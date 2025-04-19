/* function dosPunterosSuma(arr, objetivo) {
    let inicio = 0; // Primer puntero
    let fin = arr.length - 1; // Segundo puntero

    while (inicio < fin) {
        const suma = arr[inicio] + arr[fin];

        if (suma === objetivo) {
            return [arr[inicio], arr[fin]]; // Regresamos los números que cumplen la condición
        }

        if (suma < objetivo) {
            inicio++; // Si la suma es menor, movemos el puntero del inicio a la derecha
        } else {
            fin--; // Si la suma es mayor, movemos el puntero del fin a la izquierda
        }
    }

    return null; // No se encontró ninguna pareja
}


console.log(dosPunterosSuma([1, 2, 3, 4, 6], 6)); // [2, 4]


//Palindromo
const esPalindromo = (palabra) => {
    let inicio = 0;
    let fin = palabra.length - 1;
izquierda
, arr[derecha]    while (inicio < fin) {
        if (palabra[inicio] !== palabra[fin]) {
            return false;
        }
        inicio++;
        fin--;
    }
    return true;
};

console.log(esPalindromo("radar")); // true
console.log(esPalindromo("javascript")); // false */


//Eliminar duplicados

/* const eliminarDuplicados = (arr) => {
    let puntero = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[puntero]) {
            puntero++;
            arr[puntero] = arr[i];
        }
    }
    return arr.slice(0, puntero + 1);
}

console.log(eliminarDuplicados([1, 1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4] */





/* 
const encontrarPar = (arr, objetivo) => {
    let izquierda = 0;
    let derecha = arr.length - 1;

    while (izquierda < derecha) {
        let suma = arr[izquierda] + arr[derecha];


        if (suma === objetivo) {
            return [arr[izquierda], arr[derecha]];
        }
        else if (suma < objetivo) {
            izquierda++
        }
        else {
            derecha--
        }
    }
    return false

}


let arr = [2,5,7,11,15,18];
let obj  = 9;

let result = encontrarPar(arr, obj)
console.log(result) */

// Detectar si una palabra es palindromo 

// const esPalindromo = (arr) =>{
//     let izq = 0;
//     let der = arr.length-1


// while (izq < der) {

//    if (arr[izq] !== arr[der]) {
//         return false
//     } 
//     izq++
//     der--
// }
//     return true
    
// }

// console.log( esPalindromo([1,2,3,4,3,2,1]) )
// console.log( esPalindromo("computador") )
// console.log( esPalindromo("aibofobia") )



// const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

// 3. Encontrar usuarios duplicados basados en el id 

const listaUsuarios = [
    {id:1, nombre: "ana"},
    {id:2, nombre: "carlos"},
    {id:2, nombre: "carmen"},
    {id:3, nombre: "daniel"},
    {id:4, nombre: "josefina"},
    {id:4, nombre: "felipe"},
    {id:5, nombre: "ivan"},
]

function encontrarPareja(usuarios) {
    let izq = 0;
    let der= 1;
    let duplicados = []

    while (der < usuarios.length) {
        if (usuarios[izq].id === uduarios[der].id) {
            duplicados.push(usuarios[izq].id)
        }
        izq++
        der--
    }

    return null; 
}

console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"]

