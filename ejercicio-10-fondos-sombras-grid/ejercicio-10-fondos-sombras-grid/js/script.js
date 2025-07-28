//capturo el elemento pantalla
const pantalla = document.getElementById("resultado");

// capturo los Botones
const botones = {
  numeros: document.querySelectorAll(".numero"),
  operadores: document.querySelectorAll(".operador"),
  igual: document.getElementById("="),
  limpiar: document.getElementById("limpiar"), // Ahora sí existe
};

// Variables para estados
let primerNumero = "";
let operador = "";
let esperandoSegundoNumero = false;

// Al hacer click en el display, se va a reiniciar todo
pantalla.addEventListener("click", () => {
  pantalla.value = "0";
  primerNumero = "";
  operador = "";
  esperandoSegundoNumero = false;
});

// Evento para botones de números
for (let i = 0; i < botones.numeros.length; i++) {
  botones.numeros[i].addEventListener("click", () => {
    const valorBoton = botones.numeros[i].textContent;

    // Evita más de un punto
    if (valorBoton === ".") {
      if (pantalla.value.includes(".")) return;
      if (pantalla.value === "" || esperandoSegundoNumero) {
        pantalla.value = "0.";
        esperandoSegundoNumero = false;
        return;
      }
    }

    if (esperandoSegundoNumero) {
      pantalla.value = valorBoton;
      esperandoSegundoNumero = false;
    } else {
      if (pantalla.value === "0" && valorBoton !== ".") {
        pantalla.value = valorBoton;
      } else if (pantalla.value.length < 13) {
        pantalla.value += valorBoton;
      }
    }
  });
}


// Evento para botones de operadores
for (let i = 0; i < botones.operadores.length; i++) {
  botones.operadores[i].addEventListener("click", () => {
    if (pantalla.value === "" && primerNumero === "") return;

    if (primerNumero !== "" && operador && !esperandoSegundoNumero) {
      const resultado = calcular(
        parseFloat(primerNumero),
        parseFloat(pantalla.value),
        operador
      );
      pantalla.value = resultado;
      primerNumero = resultado;
    } else {
      primerNumero = pantalla.value;
    }

    operador = botones.operadores[i].textContent;
    esperandoSegundoNumero = true;
  });
}

// Evento para el botón igual "="
botones.igual.addEventListener("click", () => {
  if (primerNumero === "" || operador === "" || esperandoSegundoNumero) return;

  const segundoNumero = pantalla.value;
  const resultado = calcular(
    parseFloat(primerNumero),
    parseFloat(segundoNumero),
    operador
  );

  pantalla.value = resultado;
  primerNumero = resultado;
  operador = "";
  esperandoSegundoNumero = true;
});

// Botón para limpiar (C)
botones.limpiar.addEventListener("click", () => {
  pantalla.value = "0";
  primerNumero = "";
  operador = "";
  esperandoSegundoNumero = false;
});

// Funciones de operaciones
const sumar = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => (b !== 0 ? a / b : "Error");

// Función para calcular el resultado según el operador
const calcular = (a, b, operador) => {
  let resultado;
  switch (operador) {
    case "+":
      resultado = sumar(a, b);
      break;
    case "-":
      resultado = resta(a, b);
      break;
    case "x":
      resultado = multiplicacion(a, b);
      break;
    case "/":
      resultado = division(a, b);
      break;
    default:
      return b;
  }

  // Redondeo si es muy largo
  if (String(resultado).length > 13) {
    return parseFloat(resultado.toFixed(9));
  }

  return resultado;
};
