
class Usuarios {
  constructor (info) {
  this.nombre = info.nombre;
  this.edad = info.edad;
  this.direccion = info.direccion;
  this.telefono = info.telefono;}
}
const usuario1 = new Usuarios({
  nombre: "Marcos",
  edad: 24, 
  direccion: "Av alameda", 
  telefono: 56925247879,
});

console.log(usuario1);
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
