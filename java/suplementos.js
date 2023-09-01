
import {carritoDeCompra} from "../db/carrito.js";

let contenedor = document.getElementById("contenedor");
let eliminarCarro = document.getElementById("vaciar-carro")

const suplementos = [
    { id: 1, nombre: "proteina", precio: 9000, img:"https://img.freepik.com/free-psd/packages-protein-gym-mock-up_23-2148243456.jpg?w=740&t=st=1693411867~exp=1693412467~hmac=10151879e936788eb1823a992b065024a6834d38cd4c3fd0f5167ce1b7d40f9e", categoria: "suplementos"},

    { id: 2, nombre: "creatina", precio: 25000, img: "https://img.freepik.com/free-vector/realistic-set-two-barbells-sport-supplement-glassy-surface-white-background-vector-illustration_1284-19886.jpg?w=740&t=st=1693413769~exp=1693414369~hmac=08da20a2630faed97af3d4df9eaa81c5ac627904a8e984a64916dc98b3e52741", categoria: "suplementos"},

    { id: 3, nombre: "pre entreno", precio: 30000, img:"https://img.freepik.com/premium-psd/close-up-front-view-soda-can-packaging-mockup_442610-68.jpg", categoria: "suplementos"},

    { id: 4, nombre: "testoterona", precio: 35000, img:"https://st2.depositphotos.com/2082539/8503/i/450/depositphotos_85034620-stock-photo-doping-in-sport-abuse-of.jpg", categoria: "suplementos" },

    { id: 5, nombre: "colageno", precio: 42000, img:"https://img.freepik.com/free-psd/food-supplement-pouch-packaging-mockup_337857-26.jpg?w=1060&t=st=1693413840~exp=1693414440~hmac=3b3faa4e46f4b4eb7bca163f4a1cc6e7cbd7f375709eea01b14d23adc5181e5d", categoria: "suplementos" },
];

localStorage.setItem("suplementos", JSON.stringify(suplementos));

let suplementosDisponibles = JSON.parse(localStorage.getItem("productos"));

document.addEventListener("DOMContentLoaded", () =>{
    generCardsSuplementos(suplementosDisponibles);
});

suplementos.forEach((item) => {
    let div = document.createElement("div");

    div.innerHTML = `
    <div class="carta">
    <img  class="imagen" src="${item.img} "alt="">
    <div class="body-carta">
    <h2 class="">${item.nombre}</h2>
    <p class="">Precio: $ ${item.precio}</p>
    <p class="">Categoria: ${item.categoria}</p>
    <button id="btn${item.id}" class=" btn  btn-danger" >Agregar al carrito</button>
    <div/>
    <div/>
    `;
    contenedor.appendChild(div);
    const  comprar = document.getElementById(`btn${item.id}`)
    comprar.addEventListener("click", () => carritoDeCompra (`${item.id}`));
});

    eliminarCarro.addEventListener("dblclick", () => {
    localStorage.clear();
    sessionStorage.clear();
    location.reload();
    alert("Carrito vacio")

    })


let nombre = prompt("Que suplementos estas buscado? de lon contrario deja el espacio en blanco");

while (nombre != "") {
    const producto = suplementos.find((item) => item.nombre === nombre);

    if (producto) {
        let mensaje = `
        Id: ${producto.id}
        Nombre: ${producto.nombre}
        Precio: ${producto.precio}`;

        alert(mensaje);
    } else {
        alert("Suplemento no encontrado");
}
        nombre = prompt("Que suplementos estas buscado? de lon contrario deja el espacio en blanco");
}


let precio = parseInt(prompt("Ingrese el precio minimo en numeros"));
const filtrados = suplementos.filter((item) => item.precio > precio);

filtrados.forEach((item) => {
    let mensaje = `
        Id: ${item.id}
        Nombre: ${item.nombre}
        Precio: ${item.precio}
`;
alert(mensaje);
});
console.log(precio);



// proteina en descuento
const suma = (p, t) => p + t;
const resta = (p, t) => p - t;
const iva = (valoProducto) => valorProducto * 0.19;

let valorProducto = 80000;
let descuento = 30000;
let precioFinal =  resta(suma(precioProducto, iva(precioProducto)), descuento);