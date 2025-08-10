// --------------------------------------//
//           Variables globales          //
// --------------------------------------//

const comentarios = [];

// --------------------------------------//
//           Funciones globales          //
// --------------------------------------//

function enviarformContacto(e){
   console.log('Enviando formulario de contacto...');
   e.preventDefault();

   // referencia a los campos(input) del formulario
   const refNombre = document.getElementById('nombre');
   const refEmail = document.getElementById('email');
   const refMensaje = document.getElementById('comentarios');

   // obtengo los valores de los campos(input) del formulario
   const nombre = refNombre.value;
   const email = refEmail.value;
   const mensaje = refMensaje.value;

   // creo un objeto contacto con los valores obtenidos
   const contacto = {
      nombre: nombre,
      email: email,
      mensaje: mensaje
   };
   console.log(contacto);
   comentarios.push(contacto);

   // muestro un mensaje de éxito
   alert('Formulario enviado correctamente. ¡Gracias por contactarnos!');

   // reseteo el formulario
   refNombre.value = '';
   refEmail.value = '';
   refMensaje.value = '';


}


function start(){
   console.warn(document.querySelector('title').textContent);

   enviarformContacto();
}
