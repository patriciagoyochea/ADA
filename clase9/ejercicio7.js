const prompt = require('prompt-sync')();
let peso = parseFloat(prompt("Ingrese su peso en kilogramos: "));
let pesoenlibras = peso * 2.20462;
console.log("Su peso en libras es: " + pesoenlibras + " lbs");