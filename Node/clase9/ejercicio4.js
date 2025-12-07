const prompt = require('prompt-sync')();
let nombre = prompt("Ingrese su nombre: ");
if (nombre ==="Patricia"){ 
   console.log("Hola Patricia, bienvenida de nuevo!");
}
else{
   console.log("Hola " + nombre + ", un gusto conocerte!");
}