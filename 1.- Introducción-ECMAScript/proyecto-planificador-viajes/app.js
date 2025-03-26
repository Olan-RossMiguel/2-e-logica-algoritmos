import { registrarDestino } from './viajes.js';

// Captura del formulario y manejo del evento submit
document.getElementById("formularioViaje").addEventListener("submit", event => {
    event.preventDefault(); // Evitar recarga

    // Obtener valores del formulario
    const destino = document.getElementById("destino").value;
    const fecha = document.getElementById("fecha").value;
    const transporte = document.getElementById("transporte").value;

    // Registrar el destino
    registrarDestino(destino, fecha, transporte);

    // Limpiar formulario
    document.getElementById("formularioViaje").reset();
});
