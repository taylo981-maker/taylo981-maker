const prompt = require('prompt-sync')();

// Função
function calcularAlturaPredio(alturaPessoa, sombraPessoa, sombraPredio) {
    return (alturaPessoa * sombraPredio) / sombraPessoa;
}

// Entrada
let alturaPessoa = Number(prompt("Digite a altura da pessoa: "));
let sombraPessoa = Number(prompt("Digite a sombra da pessoa: "));
let sombraPredio = Number(prompt("Digite a sombra do prédio: "));

// Processamento
let altura = calcularAlturaPredio(alturaPessoa, sombraPessoa, sombraPredio);

// Saída
console.log("Altura do prédio: " + altura.toFixed(2) + " metros");