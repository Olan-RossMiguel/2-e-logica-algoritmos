const fs = require("fs");


const filePath = './notas.json';

// Crear una nueva nota
const crearNota = (titulo, contenido) => {
    let notas = [];

    // Verifica si el archivo ya existe y si tiene contenido
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf-8');
        
        // Solo parsear si el archivo no está vacío
        if (data.trim()) {
            notas = JSON.parse(data);
        }
    }

    // Comprobación para evitar agregar una nota con el mismo título
    const notaExistente = notas.find(nota => nota.titulo === titulo);
    if (notaExistente) {
        console.log("Ya existe una nota con ese título.");
        return;
    }

    // Crear una nueva nota y agregarla al arreglo
    const nuevaNota = { titulo, contenido };
    notas.push(nuevaNota);

    // Guardar las notas en el archivo, con formato bonito
    fs.writeFileSync(filePath, JSON.stringify(notas, null, 2)); // El "null, 2" agrega formato legible al JSON
    console.log("La nota se agregó correctamente.");
};

// Listar todas las notas
const listarNotas = () => {
    if (!fs.existsSync(filePath)) {
        console.log("No hay notas guardadas.");
        return;
    }

    const data = fs.readFileSync(filePath, 'utf-8');
    const notas = JSON.parse(data);

    if (notas.length === 0) {
        console.log("No hay notas guardadas.");
    } else {
        console.log("📒 Notas:");
        notas.forEach((nota, i) => {
            console.log(`${i + 1}. ${nota.titulo}: ${nota.contenido}`);
        });
    }
};

// Eliminar una nota
const eliminarNota = (titulo) => {
    if (!fs.existsSync(filePath)) {
        console.log("No hay notas guardadas.");
        return;
    }

    const data = fs.readFileSync(filePath, 'utf-8');
    let notas = JSON.parse(data);

    const notasFiltradas = notas.filter(nota => nota.titulo !== titulo);

    if (notasFiltradas.length === notas.length) {
        console.log("No se encontró ninguna nota con ese título.");
    } else {
        fs.writeFileSync(filePath, JSON.stringify(notasFiltradas, null, 2)); // Guardar las notas actualizadas
        console.log("Nota eliminada correctamente.");
    }
};

// Ejemplos de uso
// Crear notas
crearNota("Hobbie", "Jugar Ajedrez");
crearNota("Artístitco", "Cantar");
crearNota("Entrenamiento", "Hacer HIIT");
crearNota("Académico", "Estudiar JS");
crearNota("Artístitco", "Bailar");
crearNota("Académico", "Estudiar para el examen de lógica.");
crearNota("Salud", "Tomar suficiente agua durante el día.");
crearNota("Hogar", "Limpiar el escritorio y organizar los libros.");
crearNota("Inspiración", "Leer un capítulo del libro favorito.");


// Listar notas
listarNotas();

// Eliminar una nota
eliminarNota("Hobbie");

// Listar notas después de eliminar
listarNotas();

