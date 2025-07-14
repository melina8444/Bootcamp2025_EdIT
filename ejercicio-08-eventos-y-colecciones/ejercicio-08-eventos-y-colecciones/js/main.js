// Punto 1: Mostrar mensaje al cargar
window.onload = function () {
  console.log("Contenido del DOM cargado");


// Punto 2: Cargar contenido en textarea
const textarea = document.getElementById("origen");
textarea.value = '<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>';

// Punto 3: Habilitar botones al escribir
textarea.addEventListener("input", () => {
  const inputs = document.getElementsByTagName("input");
  const buttons = document.getElementsByTagName("button");

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = false;
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
});

// Punto 4: Botones "Reemplazar" y "Agregar"
const divDestino = document.getElementById("destino");
const btnReemplazar = document.getElementById("btn-reemplazar");
const botonesAgregar = document.querySelectorAll(".btn-agregar");

btnReemplazar.addEventListener("click", () => {
  divDestino.innerHTML = textarea.value;
});

botonesAgregar.forEach(boton => {
  boton.addEventListener("click", () => {
    const texto = textarea.value;
    let veces = 1;

    switch (boton.value) {
      case "Agregar":
        veces = 1;
        break;
      case "Agregar 5 veces":
        veces = 5;
        break;
      case "Agregar 10 veces":
        veces = 10;
        break;
      case "Agregar n veces":
        const respuesta = prompt("¿Cuántas veces querés agregar el contenido?");
        veces = parseInt(respuesta);
        if (isNaN(veces) || veces <= 0) {
          alert("Por favor, ingresá un número válido mayor que 0.");
          return;
        }
        break;
    }

    for (let i = 0; i < veces; i++) {
      divDestino.innerHTML += texto;
    }
  });
});

// Punto 5: Botones inferiores
const btnVaciar = document.querySelector(".btn-vaciar");
btnVaciar.addEventListener("click", () => {
  divDestino.innerHTML = "";
});

const btnMayusculas = document.querySelector(".btn-convertir-a-mayusculas");
btnMayusculas.addEventListener("click", () => {
  divDestino.innerHTML = divDestino.innerHTML.toUpperCase();
});

const btnMinusculas = document.querySelector("button[type='button']");
btnMinusculas.addEventListener("click", () => {
  divDestino.innerHTML = divDestino.innerHTML.toLowerCase();
});

// Punto 6: Agregar "[Ok] " a cada <li>
const listaItems = document.getElementsByTagName("li");
for (let i = 0; i < listaItems.length; i++) {
  listaItems[i].innerHTML = "[Ok] " + listaItems[i].innerHTML;
}

};