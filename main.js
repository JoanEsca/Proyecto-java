

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
        
        li.innerHTML = `Bienvenido ${usuariosStart.user}`
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
                        sessionStorage.clear()
                        sessionStorage.removeItem("usuario");
                        location.reload()
                    }
                })
                });
            
            userStart.appendChild(li);
            eliminar.appendChild(button)

    
    }

});
