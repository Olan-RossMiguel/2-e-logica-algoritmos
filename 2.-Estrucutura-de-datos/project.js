

// //Creo un arreglo vacio llamdo listaDeCompras
// let listaDeCompras = [];


// //Implenta una funcion agregarProducto(producto) que agregue un nuevo producto al final de la lista.

// const agregarProducto = producto =>{
//     listaDeCompras.push(producto)
// }


// //Implenta una funcion eliminarProducto(producto) que elimina un nuevo producto al final de la lista.
// const eliminarProducto = productoAEliminar =>{
//     let nuevoArray = listaDeCompras.filter(producto => producto !== productoAEliminar)
//     listaDeCompras = nuevoArray
// }


// //Implenta una funcion de mostrar la lista de compras

// const mostrarListaDeCompras = () => {
//    for(let i = 0; i <listaDeCompras.length; i++){
//     console.log(`${i + 1}. ${listaDeCompras[i]}`)
//    }
// }   

// agregarProducto("arroz")
// agregarProducto("frijol")
// agregarProducto("maiz")
// agregarProducto("lenteja")
// agregarProducto("nuez")
// agregarProducto("ciruela")
// agregarProducto("canela ")

// mostrarListaDeCompras()
// // console.log(listaDeCompras)


// Arreglo vacío para la lista de compras
let listaDeCompras = [];

// Función para agregar un producto (como objeto)
const agregarProducto = (producto) => {
  listaDeCompras.push(producto);
};

// Función para eliminar un producto (por nombre, por ejemplo)
const eliminarProducto = (nombre) => {
  listaDeCompras = listaDeCompras.filter(producto => producto.nombre !== nombre);
};

// Función para mostrar la lista de compras
const mostrarListaDeCompras = () => {
  console.log("Lista de Compras:");
  for (let i = 0; i < listaDeCompras.length; i++) {
    const producto = listaDeCompras[i];
    console.log(`${i + 1}. ${producto.nombre} - Talla: ${producto.talla}, Color: ${producto.color}, Precio: $${producto.precio}, Género: ${producto.genero}`);
  }
};


agregarProducto({ nombre: "Playera Oversize", talla: "M", color: "Negro", precio: 250, genero: "Unisex" });
agregarProducto({ nombre: "Pantalón Cargo", talla: "L", color: "Verde Militar", precio: 400, genero: "Hombre" });
agregarProducto({ nombre: "Falda Plisada", talla: "S", color: "Rosa", precio: 350, genero: "Mujer" });
agregarProducto({ nombre: "Sudadera Hoodie", talla: "XL", color: "Azul", precio: 500, genero: "Unisex" });

mostrarListaDeCompras();

// Probamos eliminar un producto
eliminarProducto("Falda Plisada");

console.log("\n Después de eliminar un producto:\n");
mostrarListaDeCompras();





