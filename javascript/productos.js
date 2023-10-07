

let contenedor = document.getElementById("contenedor");
let eliminarCarro = document.getElementById("vaciar-carro")

let productsAvailable = JSON.parse(localStorage.getItem("products"));

// sessionStorage.setItem("carrito", JSON.stringify([]))

let carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];


sessionStorage.setItem("carrito", JSON.stringify(carrito))
let carts = document.getElementById("carts")
let cart = document.getElementById("cart")

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
    
    const  comprar = document.getElementById(`btn${products.id}`)
    comprar.addEventListener("click", () => comprarProducts(`${products.id}`))
    
    const comprarProducts = (idProducts) => { 
      
      const productCarts = carrito.find((products) => products.id === idProducts)
      if(productCarts === undefined){
        carrito.push({
                id: products.id,
                img: products.img,
                nombre: products.nombre,
                precio: products.precio,
                categoria: products.categoria,
                cantidad: 1
              });
        
              sessionStorage.setItem("carrito", JSON.stringify(carrito))
            }else{
              const indexCarts = carrito.findIndex((products) => products.id === idProducts)
              carrito[indexCarts].cantidad = carrito[indexCarts.cantidad + 1]
              carrito[indexCarts].precio = precio * carrito[indexCarts].cantidad

              sessionStorage.setItem("carrito", JSON.stringify(carrito))
            }
          };
        });
      });
        
          // maquetadoo
carts.addEventListener("click", () => {
  cart.style.display = "flex"
  cart.innerHTML = "";
  cart.innerHTML = `<th>Tus compras</th>`
  
  const cerrar = document.createElement("tr");
  cerrar.innerHTML = `<td class="cerrarcarrito"> Seguir comprando</td>`
  
  cerrar.addEventListener("click", () => {
    cart.style.display = "none";
  })
  cart.append(cerrar)


  carrito.forEach ((products) => {
    let cartContent = document.createElement("tr")
    cartContent.innerHTML =`
    <th><img class="cart-img" src="${products.img} "alt=""> </th>
    <td class="cartbody">${products.categoria}</td>
    <td class="cartbody">${products.nombre}</td>
    <td class="cartbody">$ ${products.precio}</td>
    `;
    cart.append(cartContent)
  });
  const total = carrito.reduce((acc, precio) => acc + precio.precio, 0);
  const cantidadTotal = carrito.reduce((total, {cantidad}) => total + cantidad, 0)

  const totalCart = document.createElement("tr");
  totalCart.innerHTML = `
  <th class="cartfooter"> Tienes "${cantidadTotal}" productos</th>
  <th class="cartfooter"> Total a pagar: $${total}</th>
  `;
  cart.append(totalCart);
  eliminarCarro.innerHTML = `
  <button class="btn btn-outline-danger  m-4" id="vaciar-carro">Vaciar carro</button>
  `
  cart.append(eliminarCarro)
  
});
sessionStorage.getItem("carrito", JSON.stringify(carrito))


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
          sessionStorage.clear();
          location.reload();
        };
      });
    });










