

const suplementos = [
    { id: 1, nombre: "proteina", precio: 80000 },
    { id: 2, nombre: "creatina", precio: 25000 },
    { id: 3, nombre: "pre entreno", precio: 30000 },
    { id: 4, nombre: "testoterona", precio: 35000 },
];
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