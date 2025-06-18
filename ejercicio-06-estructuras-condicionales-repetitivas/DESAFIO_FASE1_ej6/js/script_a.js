console.log('--------Ejercicio a -----------------');

var cantidadDeGatos = 10; 

// Defino los 3 emojis en un array 
var gatos = ['😺', '😾', '😹']; 

// Bucle para generar la salida para cada gato
for (let i = 1; i <= cantidadDeGatos; i++) {
    // Calculo el índice del emoji a usar
    // Uso (i - 1) para que el índice comience en 0
    var indiceDelEmoji = (i - 1) % gatos.length;

    // Obtengo el emoji correspondiente
    var emojiActual = gatos[indiceDelEmoji];

    // Imprime en la consola el formato solicitado
    console.log(`Gato #${i}: ${emojiActual}`);
}