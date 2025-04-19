const listaDeCompras = []
//Implementa una función agregarProducto(producto) que agregue un nuevo producto al final de la lista.
const agregarProducto = producto => {
    listaDeCompras.push(producto)
}
//Implementa una función eliminarProducto(producto) que elimine un producto de la lista.
const eliminarProducto = productoAEliminar => {
    let nuevoArray = listaDeCompras.filter(producto => producto !== productoAEliminar)
    listaDeCompras = nuevoArray
    
}
agregarProducto("manzana")
console.log(listaDeCompras)
