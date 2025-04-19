const productos = [
    {
      nombre: "The Legend of Zelda: Tears of the Kingdom",
      precio: 69.99,
      categoría: "Aventura"
    },
    {
      nombre: "God of War: Ragnarök",
      precio: 59.99,
      categoría: "Acción"
    },
    {
      nombre: "Mario Kart 8 Deluxe",
      precio: 49.99,
      categoría: "Carreras"
    },
    {
      nombre: "Minecraft",
      precio: 26.95,
      categoría: "Sandbox"
    },
    {
      nombre: "FIFA 24",
      precio: 59.99,
      categoría: "Deportes"
    },
    {
      nombre: "Call of Duty: Modern Warfare II Vault Edition",
      precio: 119.99,
      categoría: "Disparos"
    },
    {
      nombre: "Hogwarts Legacy Deluxe Edition",
      precio: 109.99,
      categoría: "Aventura"
    },
    {
      nombre: "FIFA 24 Ultimate Edition",
      precio: 129.99,
      categoría: "Deportes"
    },
    {
      nombre: "NBA 2K24 Black Mamba Edition",
      precio: 149.99,
      categoría: "Deportes"
    },
    {
      nombre: "Diablo IV Ultimate Edition",
      precio: 119.99,
      categoría: "RPG"
    }
  ];

  const productoMenor100 = array => array.filter(p => p.precio < 100);
const alfabeticamente = array => [...array].sort((a, b) => a.nombre.localeCompare(b.nombre));
const nombreProductos = array => array.map(p => p.nombre);

// Renderizar cards completas
const renderizarProductos = array => {
  contenedor.innerHTML = "";
  array.forEach(producto => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="nombre">${producto.nombre}</div>
      <div class="precio">$${producto.precio.toFixed(2)}</div>
      <div class="categoria">${producto.categoría}</div>
    `;
    contenedor.appendChild(card);
  });
};

// Renderizar solo nombres
const mostrarNombres = array => {
  contenedor.innerHTML = "";
  nombreProductos(array).forEach(nombre => {
    const item = document.createElement('div');
    item.className = 'nombre-solo';
    item.textContent = nombre;
    contenedor.appendChild(item);
  });
};

// DOM
const contenedor = document.getElementById('contenedor');

// Botones y eventos
document.getElementById('btn-todos').addEventListener('click', () => renderizarProductos(productos));
document.getElementById('btn-menor100').addEventListener('click', () => renderizarProductos(productoMenor100(productos)));
document.getElementById('btn-ordenar').addEventListener('click', () => renderizarProductos(alfabeticamente(productos)));
document.getElementById('btn-nombres').addEventListener('click', () => mostrarNombres(productos));

// Mostrar todos al cargar
renderizarProductos(productos);