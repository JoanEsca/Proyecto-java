
localStorage.setItem("accesorios", JSON.stringify(accesorios));

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
}


const descuentos = accesorios.map((item) => {
    if (nombre === "si")
    return{
        id: item.id,
        nombre: item.nombre,
        precio: item.precio - item.precio * 0.19,
    };
});
