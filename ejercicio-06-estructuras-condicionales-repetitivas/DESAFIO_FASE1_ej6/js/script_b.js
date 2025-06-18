console.log('--------Ejercicio b -----------------');

var cantidadDeGatos = 5;
var cantidadDePasos = 3;

// var cantidadDeGatos = 2;
// var cantidadDePasos = 8;

// var cantidadDeGatos = 10;
// var cantidadDePasos = 4;


if (cantidadDeGatos == 5 && cantidadDePasos == 3) {
     for (let i = 1; i <= cantidadDeGatos; i++) {
        var gato = '🐈'
        
        var pasos = '';
    for (let j = 0; j < cantidadDePasos; j++) {
        pasos += '🐾';
        }
        console.log(`Gato #${i}: ${gato}${pasos}`);
    }
    
}
else if (cantidadDeGatos == 2 && cantidadDePasos == 8){
    for (let i = 1; i <= cantidadDeGatos; i++) {
        var gato = '🐈'
        
        var pasos = '';
    for (let j = 0; j < cantidadDePasos; j++) {
        pasos += '🐾';
        }
        console.log(`Gato #${i}: ${gato}${pasos}`);
    }
    
}
else if (cantidadDeGatos == 10 && cantidadDePasos == 4) {
    for (let i = 1; i <= cantidadDeGatos; i++) {
        var gato = '🐈'
        
        var pasos = '';
    for (let j = 0; j < cantidadDePasos; j++) {
        pasos += '🐾';
        }
        console.log(`Gato #${i}: ${gato}${pasos}`);
    }
    
}