
let carts = document.getElementById("carts")
let cart = document.getElementById("cart")

let contenedor = document.getElementById("contenedor");
let eliminarCarro = document.getElementById("vaciar-carro")

let productsAvailable = JSON.parse(localStorage.getItem("products"));

JSON.parse(sessionStorage.getItem("carrito")) === null && sessionStorage.setItem("carrito", JSON.stringify([]))

let carrito = JSON.parse(sessionStorage.getItem("carrito"))


sessionStorage.setItem("carrito", JSON.stringify(carrito))

fetch("./data.json")
.then((response) => response.json())
.then((data) => {
localStorage.setItem("products", JSON.stringify(data));
  
  data.forEach((products) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <img  class="imagen" src="${products.img} "alt="">
    <div class="body-cards">
    <h2 class="">${products.nombre}</h2>
    <p>Precio: $ ${products.precio}</p>
    <p>Categoria: ${products.categoria}</p>
    <button id="btn${products.id}" class=" btn  btn-danger" >Agregar al carrito</button>
    <div/>
    `;
    contenedor.appendChild(div);

    const comprarProducts = (idProducts) => { 
console.log(idProducts);
      const products = productsAvailable.find((products) => data.id === idProducts) 
    
      const productCarts = carrito.find((products) => data.id === idProducts)
      if(productCarts === undefined){
      carrito.push({
        id: data.id,
        img: data.img,
        nombre: data.nombre,
        precio: data.precio,
        categoria: data.categoria,
        cantidad: 1,
      });
      sessionStorage.setItem("carrito", JSON.stringify(carrito))
    }else{
      const indexCarts = carrito.findIndex((data) => data.id === idProducts)
      carrito[indexCarts].cantidad++
      carrito[indexCarts].precio = precio * carrito[indexCarts].cantidad
      sessionStorage.getItem("carrito", JSON.stringify(carrito))
      carrito.JSON.parse(sessionStorage.getItem("carrito"))
    }
    alert("comprado ")
    console.log(carrito);
  };
  
  
  const  comprar = document.getElementById(`btn${products.id}`)
    comprar.addEventListener("click", () => comprarProducts(`${products.id}`))
  });
});

    
  // const comprarProducts = (idProducts) => { 

  //     const products = productsAvailable.find((products) => products.id === idProducts) 
    
  //     const productCarts = carrito.find((products) => products.id === idProducts)
  //     if(productCarts === undefined){
  //     carrito.push({
  //       id: products.id,
  //       img: products.img,
  //       nombre: products.nombre,
  //       precio: products.precio,
  //       categoria: products.categoria,
  //       cantidad: 1
  //     });
  //     sessionStorage.setItem("carrito", JSON.stringify(carrito))
  //   }else{
  //     const indexCarts = carrito.findIndex((products) => products.id === idProducts)
  //     carrito[indexCarts].cantidad++
  //     carrito[indexCarts].precio = precio * carrito[indexCarts].cantidad
  //     sessionStorage.setItem("carrito", JSON.stringify(carrito))
  //   }
  //   carrito.JSON.parse(sessionStorage.getItem("carrito"))
  //   alert("comprado ")
  //   console.log(carrito);
  //   };















  
//       carrito.push({
//         id: products.id,
//         img: products.img,
//         nombre: products.nombre,
//         precio: products.precio,
//         categoria: products.categoria
//       });
  
//       local();
//     });
//   });
// });
// const local = () =>{
//   localStorage.setItem("carrito", JSON.stringify(carrito))
// }















// maquetadoo
carts.addEventListener("click", () => {
  const cartFace = document.createElement("div")
  cartFace.innerHTML= `
  
  <h5 >carrito.</h5>
  <button class=" btn  btn-danger m-3 d-flex justify-content-end ">Vaciar carrito</button>
  `
  cart.append(cartFace);

  carrito.forEach ((product) => {
    let cartContent = document.createElement("div")
    cartContent.innerHTML =`
    <h6>${product.nombre}</h6>
    <p>$ ${product.precio}</p>
    <p>${product.categoria}</p>
    `;
    cart.append(cartContent)
  });
});

eliminarCarro.addEventListener("dblclick", () => {

  Swal.fire({
        title: 'Quieres vaciar tu carro?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: "#bb1111dd",
        cancelButtonText: 'NO',
        confirmButtonText: 'SI'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear();
          sessionStorage.clear();
          location.reload();
        };
      });
    });


    // let nombre = prompt("Que suplementos estas buscado? de lon contrario deja el espacio en blanco");

    // while (nombre != "") {
//     const producto = suplementos.find((item) => item.nombre === nombre);

//     if (producto) {
//         let mensaje = `
//         Id: ${producto.id}
//         Nombre: ${producto.nombre}
//         Precio: ${producto.precio}`;

//         alert(mensaje);
//     } else {
//         alert("Suplemento no encontrado");
// }
//         nombre = prompt("Que suplementos estas buscado? de lon contrario deja el espacio en blanco");
// }


// let precio = parseInt(prompt("Ingrese el precio minimo en numeros"));
// const filtrados = suplementos.filter((item) => item.precio > precio);

// filtrados.forEach((item) => {
//     let mensaje = `
//         Id: ${item.id}
//         Nombre: ${item.nombre}
//         Precio: ${item.precio}
// `;
// alert(mensaje);
// });
// // proteina en descuento
// const suma = (p, t) => p + t;
// const resta = (p, t) => p - t;
// const iva = (valoProducto) => valorProducto * 0.19;

// let valorProducto = 80000;
// let descuento = 30000;
// let precioFinal =  resta(suma(precioProducto, iva(precioProducto)), descuento);