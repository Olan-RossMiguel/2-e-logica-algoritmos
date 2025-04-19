// function findLongestWord(text) {
//     // TODO: Dividir el texto en palabras y almacenarlas en una variable
//     // const words = ...

//     let longestWord = ''; // Inicializar la palabra más larga

    // TODO: Recorrer el arreglo de palabras con un ciclo
    // for (...) {
        // TODO: Comparar la longitud de la palabra actual con la más larga
        // if (...) {
            // Actualizar la palabra más larga
            // longestWord = ...;
        // }
    // }

    // TODO: Retornar la palabra más larga encontrada
    // return ...;
//}

// Ejemplo de uso
// const text = "JavaScript es un lenguaje de programación increíble para aprender.";
// // TODO: Llama a la función y muestra el resultado
// console.log(findLongestWord(text)); // Resultado esperado: "programación"



function palabraMasLarga(texto) {
    let palabras = texto.split(' '); 
    let longestWord = ''; 

    for (let fin = 0; fin < palabras.length; fin++) { 
        if (palabras[fin].length > longestWord.length) { 
            longestWord = palabras[fin]; 
        }
    }

    return longestWord; 
}

console.log(palabraMasLarga("En el ensimismado de gozo, por fortuna divina, canta en jubilo, elocuencia y realidad benigna, no más que felicidad ante la realidad marchita . "));
// Resultado: "ensimismado"
