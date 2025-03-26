export let destinos = [];

// Función para registrar un destino
export const registrarDestino = (destino, fecha, transporte) => {
    const costo = calcularCosto(destino, transporte);
    const nuevoViaje = { destino, fecha, transporte, costo };

    destinos.push(nuevoViaje);
    mostrarItinerario();
};

// Función para calcular el costo del viaje
export const calcularCosto = (destino, transporte) => {
    let costoBase = {
        "Paris": 500,
        "Londres": 400,
        "New York": 600,
        "Bogota": 300,
        "Moscu": 1000,
        "Roma": 500,
        "Madrid": 600,
        "Caracas": 700
    }[destino] || 0; // Valor por defecto 0 si el destino no está en la lista

    let costoAdicional = {
        "Avión": 200,
        "Tren": 100,
        "Barco": 300
    }[transporte] || 0; // Valor por defecto 0 si el transporte no está en la lista

    return costoBase + costoAdicional;
};

// Función para mostrar el itinerario en el HTML
export const mostrarItinerario = () => {
    const itinerarioDiv = document.getElementById("itinerario");
    itinerarioDiv.innerHTML = ""; // Limpiar antes de agregar nuevos elementos

    destinos.forEach(({ destino, fecha, transporte, costo }) => {
        itinerarioDiv.innerHTML += `
            <div>
                <p><strong>Destino:</strong> ${destino}</p>
                <p><strong>Fecha:</strong> ${fecha}</p>
                <p><strong>Transporte:</strong> ${transporte}</p>
                <p><strong>Costo:</strong> $${costo}</p>
                <hr>
            </div>
        `;
    });
};
