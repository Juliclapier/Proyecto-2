let carrito = [];
if (localStorage.getItem("carrito") != null) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
  document.getElementById("contador").innerHTML = carrito.length;
}
class remeras {
  constructor(modelo, precio, talle, colores, stockproducto) {
    this.modelo = modelo;
    this.precio = precio;
    this.talle = talle;
    this.colores = colores;
    this.stockproducto = stockproducto;
  }

//   "agregarAlCarrito({modelo, precio, talle, colores. stockproducto})"
}
let remeAlf = new remeras("Alf", 560, "S", "gris gastado", 5);
let remeCapitan = new remeras("Capitan del espacio", 650, "L", "rosa", 2);
let remeBazooka = new remeras("Bazooka", 450, "M", "Blanca", 3);
let remeJorgito = new remeras("Jorgito", 600, "M", "Blanca", 4);
let remeBritney = new remeras("Britney", 450, "L", "amarilla", 10);
let remeBuzos = new remeras("Buzos", 700, "M", "Varios colores", 9);

const baseDeDatos = [remeCapitan, remeBazooka, remeJorgito, remeBritney, remeBuzos]
//   remeCapitan,
//   remeBazooka,
//   remeJorgito,
//   remeBritney,
//   remeBuzos,
// ];


function agregarAlCarrito(precio) {
  carrito.push(precio);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  let stock = 33;
  let aux = 0;
  for (let i = 0; i < carrito.length; i++) {
    aux += carrito[i]; 
  }
  document.getElementById("total").innerHTML = aux;
}

if (localStorage.getItem("carrito") != null) {
  console.log("entra aca si funciona");
  let valoresDelCarrito = JSON.parse(localStorage.getItem("carrito"));
  carrito = valoresDelCarrito;
}

document.getElementById("contador").innerHTML = carrito.length;

function borrarUnProducto(carrito) {
  const borroCarrito = [];
  for (let i = 0; i < carrito.length; i++) {
    if (i != 1) {
      borroCarrito.push(carrito[i]);
    }
  }
  localStorage.setItem("carrito", JSON.stringify(borroCarrito));
 carrito = borroCarrito;
}
