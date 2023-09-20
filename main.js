

const idBoton = document.getElementById("id-boton");
const idRegistro = document.getElementById("id-registro");

const userStart = document.getElementById("userStart");
const eliminar = document.getElementById("eliminar");

let usuariosStart = JSON.parse(sessionStorage.getItem("usuario"));

document.addEventListener("DOMContentLoaded", () => {
    if( usuariosStart === null){
    const a = document.createElement("a");
    a.innerHTML = `
    <a class="nav-link " aria-current="page" href="pages/usuarios.html">Registrate</a>
    `
    userStart.appendChild(a);
    }else{
        const li = document.createElement("a");
        
        li.innerHTML = `bienvenido ${usuariosStart.user}`
        eliminar.innerHTML = `
        <button class=" btn  btn-danger m-3 d-flex justify-content-end">Cerrar sesion</button>
        `
            eliminar.addEventListener("dblclick", () => {
                Swal.fire({
                    title: 'Quieres cerrar sesíon?',
                    icon: 'warning',
                    showCancelButton: true,
                    cancelButtonColor: '#bb1111dd',
                    cancelButtonText: 'NO',
                    confirmButtonText: 'SI',
                }).then((result) => {
                    if (result.isConfirmed) {
                        sessionStorage.removeItem("usuario");
                        location.reload()
                    }
                })
                });
            
            userStart.appendChild(li);
            eliminar.appendChild(button)

    
    }

});

//     class usuariosNuevos{
//         constructor(user, pass){
//             this.id = usuarios.length + 1;
//             this.user = user;
//             this.pass = pass;
//             this.admin = false;
//     }};



// idBoton.addEventListener("click", (e) => {
//     e.preventDefault()

//     const user = idRegistro.children[0].children[1].value
//     const pass = idRegistro.children[1].children[1].value

//     const nuevoUsuario = new usuariosNuevos(user, pass);

//     Registrar(nuevoUsuario);
// });


// const Registrar = (nuevoUsuario) => {

//     const userNuevo = usuarios.find((usuario) => usuario?.user === nuevoUsuario.user);
//     if(userNuevo === undefined){

//         usuarios.push(nuevoUsuario);
//         localStorage.setItem("usuarios", JSON.stringify(usuarios));
//         sessionStorage.setItem("usuario", JSON.stringify(nuevoUsuario));
//         Swal.fire(
//             'Bienvenido, puedes realizar tus compras',
//             'Usuario creado ',
//             'success'
//           )
        
//     }else{
//         Swal.fire('Ya estas registrado')


//         sessionStorage.setItem("usuario", JSON.stringify(usuario));
//     }};
        // eliminar.addEventListener("dblclick", () => {
        //     Swal.fire({
        //         title: 'Quieres cerrar sesíon?',
        //         icon: 'warning',
        //         showCancelButton: true,
        //         cancelButtonColor: '#bb1111dd',
        //         cancelButtonText: 'NO',
        //         confirmButtonText: 'SI',
        //       }).then((result) => {
        //         if (result.isConfirmed) {
        //             sessionStorage.clear(),
        //             location.reload()
        //           }
        //         })
        //     });



// let suplemento = prompt("Quieres tomar suplementos?").toLowerCase();
// if (suplemento === "si"){
//     alert ("Nos tienes que ayudar con una informacion");
// } else {
//     alert ("no pasa nada igual puedes entrenar al 100%");
// } 

// let edad = parseInt(prompt("Cual es tu edad?"));
// if (edad <= 16){
//     alert ("Tienes que ser mayor de 16");
// } else{
//     alert ("Puedes tomar suplementos sin ningun problema");
//  }
