let carrito = [];


function agregarAlCarrito(producto) {
    carrito.push(producto);
    console.log("Producto agregado al carrito:", producto);
    
    const carritoItems = document.getElementById("carrito-items");
    const li = document.createElement("li");
    li.textContent = `${producto.nombre} - $${producto.precio}`;
    carritoItems.appendChild(li);
  }
  