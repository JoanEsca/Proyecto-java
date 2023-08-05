
function saludar() {
    let nombre = prompt("Como te llamas?");
    alert(`${nombre} Es un gusto poder ayudarte`);
}
saludar();


let suplemento = prompt("Quieres tomar suplementos?").toLowerCase();
if (suplemento === "si"){
    alert ("Nos tienes que ayudar con una informacion");
} else {
    alert ("no pasa nada igual puedes entrenar al 100%");
} 

let edad = parseInt(prompt("Cual es tu edad?"));
if (edad <= 16){
    alert ("Tienes que ser mayor de 16");
} else{
    alert ("Puedes tomar suplementos sin ningun problema");
}



let entrada = prompt("Que suplementos estas buscanco? ").toLowerCase();

while (entrada != "SLP") {
    switch (entrada){
    case "proteina":
        alert("Disponible");
        break;
    case "creatina":
        alert("Disponible");
        break;
    case "pre entreno":
            alert("Disponible");
            break; 
    default:
        alert("No trabajamos con ese tipo de productos");
        break;
    }
    entrada = prompt("Que suplementos estas buscanco?");
}

// proteina en descuento 
const suma = (p, t) => p + t;
const resta = (p, t) => p - t;
const iva = (valoProducto) => valorProducto * 0.19;

let valorProducto = 80000;
let descuento = 30000;

let precioFinal =  resta(suma(precioProducto, iva(precioProducto)), descuento);





