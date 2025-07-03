let fila = []; // Aca van los gatos agregados (fila principal)
let cajas = []; // Aca van los gatos repetidos (cajas)

function agregarGato(cara) {
  // 1. Agrega el nuevo gato a la tira
  fila.push(cara);
  
  // 2. Verifico si hay más de 5 gatos seguidos iguales al final
  let repetidos = contarRepetidosFinal(fila);

  if (repetidos.count >= 5) {
    // 3. Si hay más de 5 iguales, los saco y los agrego a una caja al principio
    const gatosRepetidos = fila.splice(repetidos.indexInicial); // Saco esos gatos
    cajas.unshift(gatosRepetidos); // Los meto en la nueva caja al principio
  }

  // 4. Vuelvo a mostrar todo
  visualizar();
}

function contarRepetidosFinal(arr) {
  const ultimaCara = arr[arr.length - 1]; // Obtengo la última cara agregada
  let count = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === ultimaCara) {
      count++;
    } else {
      break;
    }
  }

  return {
    count: count,
    indexInicial: arr.length - count
  };
}

// Limpio la fila y las cajas para mostrar la fila vacia
function reset() {
  fila = [];
  cajas = [];
  visualizar();
}

function visualizar() {
  const contenedor = document.getElementById('contenedor-gatos');
  contenedor.innerHTML = '';

  // Primero muestro todas las cajas
 for (let caja of cajas) {
  contenedor.innerHTML += `<span class="caja">${caja.join('')}</span>`;
}

  // Luego muestro la fila actual
  contenedor.innerHTML += fila.join('');
}
