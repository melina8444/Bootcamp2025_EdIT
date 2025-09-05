// Referencias a los elementos
const montoInput = document.getElementById("monto");
const valorInput = document.getElementById("valor");
const resultado = document.getElementById("resultado");
const actualizacionCheck = document.getElementById("actualizacion");
const fecha = document.getElementById("fecha");

// Función para convertir pesos a dólares
function convertir() {
  const monto = parseFloat(montoInput.value) || 0;
  const valor = parseFloat(valorInput.value) || 0;

  if (monto > 0 && valor > 0) {
    const convertido = monto / valor;
    resultado.textContent = `USD ${convertido.toFixed(2)}`;
  } else {
    resultado.textContent = "USD 0.00";
  }
}

// Función para obtener la cotización desde la API
async function actualizarCotizacion() {
  try {
    const respuesta = await fetch("https://api.bluelytics.com.ar/v2/latest");
    const data = await respuesta.json();

    // Tomo el valor del dólar blue promedio
    const cotizacionBlue = data.blue.value_avg;

    // Muestro en el input de valor
    valorInput.value = cotizacionBlue;

    // Muestro la fecha de actualización
    const ahora = new Date();
    fecha.textContent = `Actualizado: ${ahora.toLocaleString()}`;

    // Recalculo el resultado
    convertir();
  } catch (error) {
    console.error("Error al obtener la cotización:", error);
    fecha.textContent = "Error al actualizar cotización";
  }
}

// Escucho cambios
montoInput.addEventListener("input", convertir);
valorInput.addEventListener("input", convertir);

// Manejo  la actualización de forma automática

let intervalo = null;

actualizacionCheck.addEventListener("change", () => {
  if (actualizacionCheck.checked) {
    // Actualiza inmediatamente
    actualizarCotizacion();

    // Y luego repito cada 2 segundos (2000 ms)
    intervalo = setInterval(actualizarCotizacion, 2000);
  } else {
    // Detengo la actualización automática
    clearInterval(intervalo);
    intervalo = null;
    fecha.textContent = "";
  }
});

