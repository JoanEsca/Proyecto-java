let usuarioGuardado = [{
    id: 1,
    nombre: "Matias",
    password: 1234,
    admi: true,
}];

JSON.parse(localStorage.getItem("usuarios")) || localStorage.setItem("usuarios", JSON.stringify(usuarioGuardado));

const idBoton = document.getElementById("id-boton");
const idRegistro = document.getElementById("id-registro");

// let eliminar = document.getElementById("eliminar")

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
        Swal.fire(
            'Bienvenido, puedes realizar tus compras',
            'Usuario creado ',
            'success',
            );
            location.href = "../index.html"
    }else{
        Swal.fire('Ya estas registrado'),
        location.href = "../index.html"

        sessionStorage.setItem("usuario", JSON.stringify(usuario));
    }};
