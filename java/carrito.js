// import { productsAvailable } from "./productos.js";

// JSON.parse(sessionStorage.getItem("carrito")) === null && sessionStorage.setItem("carrito", JSON.stringify([]))

// let carrito = JSON.parse(sessionStorage.getItem("carrito"))
// export const comprarProducts = (idProducts) => { 


//     const products = productsAvailable.find((products) => products.id === idProducts) 
  
//     const productCarts = carrito.find((products) => products.id === idProducts)
//     if(productCarts === undefined){
//     carrito.push({
//       id: data.id,
//       img: data.img,
//       nombre: data.nombre,
//       precio: data.precio,
//       categoria: data.categoria,
//       cantidad: 1
//     });
//     sessionStorage.setItem("carrito", JSON.stringify(carrito))
//   }else{
//     const indexCarts = carrito.findIndex((data) => products.id === idProducts)
//     carrito[indexCarts].cantidad = carrito[indexCarts + 1]
//     carrito[indexCarts].precio = precio * carrito[indexCarts].cantidad
//     sessionStorage.setItem("carrito", JSON.stringify(carrito))
//   }
//   // carrito.JSON.parse(sessionStorage.getItem("carrito"))
//   alert("comprado ")
//   console.log(carrito);
// };
