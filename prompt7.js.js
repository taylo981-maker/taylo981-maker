const prompt = require("prompt-sync")();
let opçao = '';

while (opçao !== '3') {
    console.log("\n=== Menu ===");
    console.log("1. usario aluno");
    console.log("2. Listar Alunos");
    console.log("3. Sair");
    opçao = prompt("opção: ");