

// function mergeSort(arr) {
//     if (arr.length <= 1) return arr; // Caso base
//     // Dividir
//     const mid = Math.floor(arr.length / 2);
//     const left = mergeSort(arr.slice(0, mid));
//     const right = mergeSort(arr.slice(mid));
//     // Combinar
//     return merge(left, right);
// }

// function merge(left, right) {
//     let result = [];
//     let i = 0, j = 0;

//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]) {
//             result.push(left[i++]);
//         } else {
//             result.push(right[j++]);
//         }
//     }

//     // Añadimos elementos restantes
//     return result.concat(left.slice(i)).concat(right.slice(j));
// }

// // Ejemplo de uso

// const array = [5, 2, 9, 1, 5, 6];

// console.log(mergeSort(array)); // Salida: [1, 2, 5, 5, 6, 9]



// //suma de numeros en array

// const sumadac = (arr)=>{

//     //caso base
// if (arr.lenght === 1 ){
//     return arr[0]

// }

// //Dividir

// const medio = Math.floor(arr.lenght/2)
// const izq = arr.slice(0, medio)
// const der = arr.slice(medio)


// //Conquistar

// const sumaIzq = sumadac(izq)
// const sumaDer = sumadac(der)

// //Combinar

// return sumaIzq + sumaDer


// }

// console.log(sumadac([1, 4, 3, 5, 8, 2]))



// // Suma de números en un array
// function sumadyv (arr) {
//     //Caso base
//     if(arr.length === 1){
//         return arr[0]
//     }
//     //Dividir
//     const medio = Math.floor(arr.length/2)
//     const izq = arr.slice(0, medio)
//     const der = arr.slice(medio)
//     //Conquistar
//     const sumaIzq = sumadyv(izq)
//     const sumaDer = sumadyv(der)
//     //Combinar
//     return sumaIzq + sumaDer
// }
// console.log( sumadyv([1,4,3,5,8,2]) )


// const busquedaBinaria = (arr, target, inicio = 0, fin = arr.length-1) =>{
//     //Caso base

//     if(inicio > fin){
//         return -1
//     }

//     //Calcular el indice medio
//     const medio = Math.floor( (inicio+fin)/2 )

//     //si el elemento de en medio es el que buscamos, entonces lo devolvemos

//     if (arr[medio] === target) return medio

    
//     //si el elemento de en medio es mayor al target  buscamos en la mitad izquierda

//     if (arr[medio] > target) {
//         return busquedaBinaria(arr, target, inicio, medio-1)
//     }else{
//         return busquedaBinaria(arr, target, medio+1, fin)
//     }
    
// }

// console.log(busquedaBinaria( [1,3,5,7,9], 7 ) ) index 3


//Merge sort

//Ordena una lista o arreglo, lo divide en partes pequeñas y luego lad combina

// [4,2,1,3]

const mergeSort = (arr) => {
    // Caso base
    if (arr.length <= 1) return arr;

    // Divide el arreglo en dos mitades
    const medio = Math.floor(arr.length / 2);
    const izq = mergeSort(arr.slice(0, medio));
    const der = mergeSort(arr.slice(medio));

    // Conquista: unir ambas mitades ordenadas
    return merge(izq, der);
};

const merge = (izq, der) => {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < izq.length && j < der.length) {
        if (izq[i] < der[j]) {
            result.push(izq[i]);
            i++;
        } else {
            result.push(der[j]);
            j++;
        }
    }

    return result.concat(izq.slice(i)).concat(der.slice(j));
};

console.log(mergeSort([4, 2, 1, 3]));
// Salida esperada: [1, 2, 3, 4]
