
const idBoton = document.getElementById("id-boton");
const idRegistro = document.getElementById("id-registro");
const userLogin = document.getElementById("userlogin");

let eliminar = document.getElementById("eliminar")

let usuarios = JSON.parse(localStorage.getItem("usuarios"));

    class usuariosNuevos{
        constructor(user, pass){
            this.id = usuarios.length + 1;
            this.user = user;
            this.pass = pass;
            this.admin = false;
    }};



idBoton.addEventListener("click", (e) => {
    e.preventDefault()

    const user = idRegistro.children[0].children[1].value
    const pass = idRegistro.children[1].children[1].value

    const nuevoUsuario = new usuariosNuevos(user, pass);

    Registrar(nuevoUsuario);
});


const Registrar = (nuevoUsuario) => {

    const userNuevo = usuarios.find((usuario) => usuario?.user === nuevoUsuario.user);
    if(userNuevo === undefined){

        usuarios.push(nuevoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        sessionStorage.setItem("usuario", JSON.stringify(nuevoUsuario));
        alert("Bienvenido ya puedes realizar tus compras");
        
    }else{
        alert(`Ya estas registrado`);


        sessionStorage.setItem("usuario", JSON.stringify(usuario));
    }};
        eliminar.addEventListener("dblclick", () => {
            sessionStorage.clear();
            location.reload();
            alert("Sesión cerrada");
        });





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
