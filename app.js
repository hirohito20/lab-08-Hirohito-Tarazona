class Producto {
  constructor(nombre, precio, descuento, imagen) {
    this.nombre = nombre;
    this.precio = precio;
    this.descuento = descuento;
    this.imagen = imagen;
  }

  calcularPrecioFinal() {
    return this.precio - (this.precio * this.descuento) / 100;
  }
}

const producto1 = new Producto("Laptop", 2500, 10, "laptop.png");
const producto2 = new Producto("Audífonos", 180, 25, "audifonos.png");
const producto3 = new Producto("Teclado mecánico", 320, 15, "teclado.png");

const catalogo = [producto1, producto2, producto3];

const contenedor = document.getElementById("contenedor-productos");

catalogo.forEach((producto) => {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");

  const imagen = document.createElement("img");
  imagen.src = producto.imagen;
  imagen.alt = producto.nombre;

  const titulo = document.createElement("h3");
  titulo.textContent = producto.nombre;

  const precio = document.createElement("p");
  precio.classList.add("precio");
  precio.textContent = "S/ " + producto.precio.toFixed(2);

  const boton = document.createElement("button");
  boton.textContent = "Aplicar Descuento";

  boton.addEventListener("click", () => {
    const precioFinal = producto.calcularPrecioFinal();
    precio.textContent = "S/ " + precioFinal.toFixed(2) + " (-" + producto.descuento + "%)";
    boton.disabled = true; 
  });

  tarjeta.appendChild(imagen);
  tarjeta.appendChild(titulo);
  tarjeta.appendChild(precio);
  tarjeta.appendChild(boton);
  contenedor.appendChild(tarjeta);
});