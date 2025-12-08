const prompt = require('prompt-sync')();
let dia1 = parseInt(prompt("Ingrese el primer día: "));
let dia2 = parseInt(prompt("Ingrese el segundo día: "));
let dia3 = parseInt(prompt("Ingrese el tercer día: "));
let dia4 = parseInt(prompt("Ingrese el cuarto día: "));
let dia5 = parseInt(prompt("Ingrese el quinto día: "));
let dia6 = parseInt(prompt("Ingrese el sexto día: "));
let dia7 = parseInt(prompt("Ingrese el séptimo día: "));

console.log("Día 1: " + dia1 + "Lunes");
console.log("Día 2: " + dia2 + "Martes");
console.log("Día 3: " + dia3 + "Miércoles");
console.log("Día 4: " + dia4 + "Jueves");
console.log("Día 5: " + dia5 + "Viernes");
console.log("Día 6: " + dia6 + "Sábado");
console.log("Día 7: " + dia7 + "Domingo");  
console.log("El dia es inválido si no está entre 1 y 7.");
