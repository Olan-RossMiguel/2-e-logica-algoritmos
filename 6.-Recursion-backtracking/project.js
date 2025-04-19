// // Copy code
// // Lista de regalos
// const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

// // TODO: Completa esta función para que busque recursivamente el regalo en la lista
// function findGift(gifts, giftName, index = 0) {
//     // Caso base: Si llegamos al final de la lista
//     if (index === gifts.length) {
//         return `${giftName} no está en la lista.`;
//     }
//   // TODO: Incluye el caso base donde se llega al final de la lista.
//   // TODO: Incluye el caso base donde se encuentra el regalo.
//   // TODO: Realiza la llamada recursiva para seguir buscando el regalo.
// }
// // Casos de ejemplo:
// // Llama a la función con los datos de entrada y muestra el resultado en la consola.
// // Llama a la función y prueba con diferentes regalos
// let giftToFind = "Lego";
// console.log(findGift(gifts, giftToFind));
// // Salida esperada:
// // "Lego está en la posición 3."

// // Caso cuando el regalo no está en la lista
// giftToFind = "Camión";
// // Salida esperada:
// // "Camión no está en la lista."



// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

// Función recursiva para buscar un regalo en la lista
function findGift(gifts, giftName, index = 0) {
    // Caso base: Si llegamos al final de la lista y no encontramos el regalo
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }

    // Caso base: Si encontramos el regalo en la posición actual
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }

    // Llamada recursiva para revisar el siguiente elemento
    return findGift(gifts, giftName, index + 1);
}

// 🏆 Pruebas en consola:
console.log(findGift(gifts, "Lego"));  // "Lego está en la posición 3."
console.log(findGift(gifts, "Camión")); // "Camión no está en la lista."
console.log(findGift(gifts, "Pelota")); // "Pelota está en la posición 4."
console.log(findGift(gifts, "Muñeca")); // "Muñeca está en la posición 0."
