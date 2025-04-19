//Codigo de Github

// function findLongestWord(text) {
//     // TODO: Dividir el texto en palabras y almacenarlas en una variable
//     // const words = ...

//     let longestWord = ''; // Inicializar la palabra más larga

//     // TODO: Recorrer el arreglo de palabras con un ciclo
//     // for (...) {
//         // TODO: Comparar la longitud de la palabra actual con la más larga
//         // if (...) {
//             // Actualizar la palabra más larga
//             // longestWord = ...;
//         // }
//     // }

//     // TODO: Retornar la palabra más larga encontrada
//     // return ...;
// }

// // Ejemplo de uso
// const text = "JavaScript es un lenguaje de programación increíble para aprender.";
// // TODO: Llama a la función y muestra el resultado
// console.log(findLongestWord(text)); // Resultado esperado: "programación"



const maxSumaConsecutiva = (arr, k) => {
    let maxSuma = 0;
    let sumaActual = 0;

    // Paso 1: Calcula la suma inicial para los primeros 'k' elementos
    for (let i = 0; i < k; i++) {
        sumaActual += arr[i];
    }

    maxSuma = sumaActual;

    // Paso 2: Desliza la ventana a lo largo del arreglo
    for (let i = k; i < arr.length; i++) {
        sumaActual += arr[i] - arr[i - k]; // Agrega el nuevo elemento y elimina el primero
        maxSuma = Math.max(maxSuma, sumaActual); // Actualiza el máximo si es necesario
    }

    return maxSuma;
}

console.log(maxSumaConsecutiva([2, 1, 5, 1, 3, 2], 3)); // Resultado: 9


const ventanaVariable = (arr, target) => {
    let sumaActual = 0, inicio = 0, longitudMinima = Infinity;

    // Expande el puntero derecho para recorrer el arreglo
    for (let fin = 0; fin < arr.length; fin++) {
        sumaActual += arr[fin];
        // Contrae la ventana desde el inicio cuando la suma cumple la condición
        while (sumaActual >= target) {
            longitudMinima = Math.min(longitudMinima, fin - inicio + 1);
            sumaActual -= arr[inicio];
            inicio++; // Mueve el inicio hacia adelante
        }
    }

    return longitudMinima === Infinity ? 0 : longitudMinima;
}

console.log(ventanaVariable([2, 3, 1, 2, 4, 3], 7)); // Resultado: 2



//let izq = 0
// let der = izq + k - 1

// let sum = 0

// for (let i = izq; i <= der; i ++) {
//     sum += arr[i]
    
// }

const array = [-4,-1,-3,0,5,12]

const k = 3

const maxSum = (arr, k) =>{

    //Se establece la ventana
let initialWindow = arr.slice(0,k)
let sum = initialWindow.reduce((acc, val) => acc+val)

// console.log(array[izq], array[der])
}

maxSum(array, k)