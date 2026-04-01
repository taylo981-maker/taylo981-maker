const prompt = require("prompt-sync")();
let numeros = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
    let numero = prompt(" Número: ");
    numeros.push( Number (numero) );
    soma += Number (numero);
}
console.log("Total: " + soma);