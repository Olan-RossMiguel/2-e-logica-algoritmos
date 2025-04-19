// function factorial(n) {
//     // Caso base: si n es 0, el factorial es 1
//     if (n === 0) {
//         return 1;
//     }

//     // Llamada recursiva: multiplicar n por el factorial de n-1
//     return n * factorial(n - 1);
// }

// console.log(factorial(5)); // Salida: 120


// function generateCombinations(letters, current, index, results) {
//     // Agregar la combinación actual al resultado
//     results.push(current);

//     // Iterar a partir del índice actual
//     for (let i = index; i < letters.length; i++) {
//         // Llamar recursivamente añadiendo la letra actual
//         generateCombinations(letters, current + letters[i], i + 1, results);
//     }
// }

// function findAllCombinations(letters) {
//     const results = [];
//     generateCombinations(letters, '', 0, results);
//     return results;
// }

// // Ejemplo de uso
// const letters = ['a', 'b', 'c'];
// console.log(findAllCombinations(letters));

/*
Salida esperada:

[
  '',        'a',       'ab',

  'abc',     'ac',      'b',

  'bc',      'c'
]
*/


// Explicacion de clase 06

//Recursion
//Cuenta regresiva--------------
//5, 4, 3, 2, 1

// const cuentaAtras = (num) =>{
//     debugger
//     //caso base
// if (num === 0) {
//     return
// }


// console.log(num)
//     //llamada recursiva

//     cuentaAtras(num-1)
    
// }

// cuentaAtras(5)


// const factorial = (x) =>{
//     debugger
//     //caso base
//     if (x === 0){
//         return 1;
//     }

//     //llamada recursiva
//     return x * factorial(x-1);

// }

// console.log(factorial(5));


//Encontrar numero par

// num % 2 == 0

const encontrarPar = (num) =>{
    //caso base
    if (num === 0){
        return "par"
    }else if (num === 1){
    return "impar"    
    }else{
        return encontrarPar(num-2)
    }


}


console.log(encontrarPar(17))


// Backtracking


// Funcion que encuentre todas las combinaciones en un array
//[1, 2, 3]


function generarCombinaciones (arr, index=0, nuevaCadena=[]){
    debugger
    console.log(nuevaCadena)
    for (let i = index; i < arr.length; i++) {
        nuevaCadena.push(arr[i])//1. Agregar elemento a nuevaCadena
        generarCombinaciones(arr, i + 1, nuevaCadena)//2. Llamada recursiva
        nuevaCadena.pop()//3. Backtracking eliminando el último elemento de nuevaCadena 
    }
}
generarCombinaciones([1 , 2 , 3])