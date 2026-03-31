const prompt = require('prompt-sync')();
let nomes = [];

for (let i = 0; i < 5; i++) {
    let nome = prompt("Digite o nome da pessoa " + (i + 1) + ": ");
    nomes.push(nome);
}

console.log("\n=== Nomes das 5 pessoas ===");
for (let i = 0; i < nomes.length; i++) {
    console.log("Olá, " + nomes[i] + "!");
}

console.log("\nTotal de pessoas: " + nomes.length);
