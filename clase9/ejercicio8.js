const prompt = require('prompt-sync')();
let lado1 = parseFloat(prompt("Ingrese el primer lado del rectángulo: "));
let lado2 = parseFloat(prompt("Ingrese el segundo lado del rectángulo: "));
let lado3 = parseFloat(prompt("Ingrese el tercer lado del rectángulo: "));
if (lado1 === lado2 && lado2 === lado3) {
    console.log("El rectángulo es un equilátero.");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("El rectángulo es un isósceles.");
} else {
    console.log("El rectángulo es un escaleno.");
}