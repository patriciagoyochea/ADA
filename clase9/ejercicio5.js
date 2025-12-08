const prompt = require('prompt-sync')();
let numero1 = parseInt(prompt("Ingrese un número: "));
let numero2 = parseInt(prompt("Ingrese otro número: "));
let numero3 = parseInt(prompt("Ingrese un último número: "));

if (numero1 >= numero2 && numero1 >= numero3) {
    console.log("El número mayor es: " + numero1);
}
else if (numero2 >= numero1 && numero2 >= numero3) {
    console.log("El número mayor es: " + numero2);
}
else {
    console.log("El número mayor es: " + numero3);
}