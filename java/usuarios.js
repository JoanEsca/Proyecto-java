let usuarioGuardado = [{
    id: 1,
    nombre: "Matias",
    password: 1234,
    admi: true,
}];

JSON.parse(localStorage.getItem("usuarios")) || localStorage.setItem("usuarios", JSON.stringify(usuarioGuardado));
