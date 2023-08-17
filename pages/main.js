
const accesorios = [
    { id: 1, nombre: "guante", precio: 35000 },
    { id: 2, nombre: "cinturon", precio: 50000 },
    { id: 3, nombre: "rodillera", precio: 20000 },
    { id: 4, nombre: "muñequera", precio: 17000 },
];

let nombre = prompt("Si quieres ver todos nuestros accesorios escribe un si").toLowerCase();
const todosAccesorios = accesorios.map((item) => item.nombre);
if (nombre === "si") {
    let mensaje = `
    ${todosAccesorios}`;

alert(mensaje);
    } else {
    alert("Gracias por tu interes");
}

let accesorioParaEntrenar = prompt("Que accesorio estas buscado? de lo contrario deja el espacio en blanco");
while (accesorioParaEntrenar != "") {
const producto = accesorios.find((item) => item.nombre === accesorioParaEntrenar);
    if (producto) {
        let mensaje = `
        Id: ${producto.id}
        Nombre: ${producto.nombre}
        Precio: $${producto.precio}`;

    alert(mensaje);
        } else {
        alert("Accesorio no encontrado");
    }
accesorioParaEntrenar = prompt("Que accesorio estas buscado? de lon contrario deja el espacio en blanco");
}w


const descuentos = accesorios.map((item) => {
    if (nombre === "si")
    return{
        id: item.id,
        nombre: item.nombre,
        precio: item.precio - item.precio * 0.19,
    };
});
