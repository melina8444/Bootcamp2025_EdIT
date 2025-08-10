// --------------------------------------//
//           Variables globales          //
// --------------------------------------//



// --------------------------------------//
//           Funciones globales          //
// --------------------------------------//

function representarCardsDeProductos() {

    let cards = ''
    
    if (productos.length) {
        for (let i = 0; i < productos.length; i++) {
    
            let prod = productos[i];
        cards +=`<section>

                    <h3>${prod.nombre}</h3>
                    <p>Marca: ${prod.marca}</p>
                    <img
                    src="${prod.foto}"
                    alt="${prod.nombre}"
                    />
                    <p><b>${prod.detalle}</b></p>
                    <p><b>Precio: $</b> ${prod.precio}</p>
                    <p><b>Stock: </b> ${prod.stock}</p>
                    <p><b>Categoría: </b> ${prod.categoria}</p>
                    <p><b style="color:teal" >Envío: </b> ${prod.envioConCargo?'Si':'No'}</p>

                    <a href="./carrito.html" style="background: linear-gradient(135deg, #2c2e2eff, #fed6e3); 
                                                    color: white; 
                                                    padding: 10px 16px; 
                                                    border-radius: 6px; 
                                                    text-decoration: none; 
                                                    font-weight: bold; 
                                                    display: inline-block;">Comprar</a>

                </section>`
    }}
    else cards += `<h2>No hay productos disponibles. 😒</h2>`;
    
    
    document.querySelector(".section-cards-body").innerHTML = cards;


}



function start(){
   console.warn(document.querySelector('title').textContent);

//    console.log(productos)

    // Simular una carga de datos desde un servidor
    // setTimeout(representarCardsDeProductos, 5000);

    // Representar las cards de productos
   representarCardsDeProductos();
}
