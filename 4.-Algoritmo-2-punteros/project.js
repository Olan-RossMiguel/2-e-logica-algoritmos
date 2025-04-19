

const invitados = [
    { id: 1, nombre: "Valeria" },
    { id: 2, nombre: "Luis" },
    { id: 3, nombre: "Carlos" },
    { id: 4, nombre: "Cecilia" },
    { id: 5, nombre: "Miguel" },
    { id: 6, nombre: "Sofía" },
    { id: 7, nombre: "Laura" },
    { id: 8, nombre: "Pedro" },
    { id: 9, nombre: "Pablo" },
    { id: 10, nombre: "Camila" },
    { id: 11, nombre: "Lucas" },
    { id: 12, nombre: "Diego" },
    { id: 13, nombre: "Diana" },
    { id: 14, nombre: "Fernando" },
    { id: 15, nombre: "Tatiana" }
];


function encontrarPareja(arr) {
    for (let i = 0; i < arr.length; i++) {
        const inicial1 = arr[i].nombre.charAt(0).toLowerCase();

        for (let j = i + 1; j < arr.length; j++) {
            const inicial2 = arr[j].nombre.charAt(0).toLowerCase();

            if (inicial1 === inicial2) {
                return [arr[i].nombre, arr[j].nombre];
            }
        }
    }

    return null;
}


console.log(encontrarPareja(invitados));
// Resultado esperado: ["Carlos", "Cecilia"]
