// --------------------------------------//
//           Variables globales          //
// --------------------------------------//



// --------------------------------------//
//           Funciones globales          //
// --------------------------------------//


function agregar(e){
   console.log('Agregando producto...');
   e.preventDefault();

// referencia a los campos(input) del formulario
   const refNombre = document.getElementById('nombre');
   const refPrecio = document.getElementById('precio');
   const refStock = document.getElementById('stock');
   const refMarca = document.getElementById('marca');
   const refCategoria = document.getElementById('categoria');
   const refDescripcionCorta = document.getElementById('descripcion-corta');
   const refDescripcionLarga = document.getElementById('descripcion-larga');
   const refFoto = document.getElementById('foto');
   const refEdadDesde = document.getElementById('edad-desde');
   const refEdadHasta = document.getElementById('edad-hasta');
   const refEnvio = document.getElementById('envio');

// obtengo los valores de los campos(input) del formulario
   const nombre = refNombre.value;
   const precio = refPrecio.value;
   const stock = refStock.value;
   const marca = refMarca.value;
   const categoria = refCategoria.value;
   const descripcionCorta = refDescripcionCorta.value;
   const descripcionLarga = refDescripcionLarga.value;
   const foto = refFoto.value;
   const edadDesde = refEdadDesde.value;
   const edadHasta = refEdadHasta.value;
   const envio = refEnvio.checked;

// creo un objeto producto con los valores obtenidos
   const producto = {
      nombre: nombre,
      precio: parseFloat(precio),
      stock: parseInt(stock),
      marca: marca,
      categoria: categoria,
      descripcionCorta: descripcionCorta,
      descripcionLarga: descripcionLarga,
      edadDesde: parseInt(edadDesde),
      edadHasta: parseInt(edadHasta),
      foto: foto,
      envio: envio
   };

   console.log(producto)
// agrego el producto al array de productos
   productos.push(producto);

   // muestro el producto en 
representablaDeProductos();

   // borro los campos(input) del formulario
   refNombre.value = '';
   refPrecio.value = '';
   refStock.value = '';
   refMarca.value = '';
   refCategoria.value = '';
   refDescripcionCorta.value = '';
   refDescripcionLarga.value = '';
   refEdadDesde.value = '';
   refEdadHasta.value = '';
   refFoto.value = '';
   refEnvio.checked = false;
}

function representablaDeProductos() {

   filasTablas = '';
if(productos.length){

   filasTablas += `<tr>
                     <th>Nombre</th>
                     <th>Precio</th>
                     <th>Stock</th>
                     <th>Marca</th>
                     <th>Categoría</th>
                     <th>Descripción corta</th>
                     <th>Descripción larga</th>
                     <th>Edad Desde</th>
                     <th>Edad Hasta</th>
                     <th>Foto</th>
                     <th>Envío</th>
                  </tr>`;

   for (let producto of productos) {

filasTablas += `<tr>
                     <td class="centrar">${producto.nombre}</td>
                     <td class="centrar">$${producto.precio}</td>
                     <td class="centrar">${producto.stock}</td>
                     <td class="centrar">${producto.marca}</td>
                     <td class="centrar">${producto.categoria}</td>
                     <td class="justificado">${producto.descripcionCorta}</td>
                     <td class="justificado">${producto.descripcionLarga}</td>
                     <td class="centrar">$${producto.edadDesde}</td>
                     <td class="centrar">$${producto.edadHasta}</td>
                     <td class="centrar"><img width="55" src="${producto.foto}" alt="foto de ${producto.nombre}"</td>
                     <td class="centrar">${producto.envio?"Si":"No"}</td>
                 </tr>`;

   }
} else {
   filasTablas += `<h2 class="centrar ">No hay productos para mostrar 😒</h2>`;
}

   document.querySelector('table').innerHTML = filasTablas;
   

}




// --------------------------------------//
//           Inicio                      //
// --------------------------------------//

function start(){
   console.warn(document.querySelector('title').textContent);

   representablaDeProductos();
}
