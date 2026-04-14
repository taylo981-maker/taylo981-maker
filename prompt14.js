const prompt = require('prompt-sync')();

let opcao = '';

let prazos = [];
let quantidadeperdida = [];
let setores = [];
let prioridades = [];

while (opcao !== '5') {

    console.log("\n== MENU ==");
    console.log("1. prazo");
    console.log("2. quantidade perdida");
    console.log("3. setor");
    console.log("4. prioridade automatica");
    console.log("5. sair");

    opcao = prompt("Opção: ");

    if (opcao === '1') {

        let prazo = Number(prompt("Prazo (dias): "));
        prazos.push(prazo);
    } 

    else if (opcao === '2') {

        let quantidade = Number(prompt("Quantidade perdida: "));
        quantidadeperdida.push(quantidade);
    } 

    else if (opcao === '3') {

        let setorInput = prompt("Setor: ");
        setores.push(setorInput);
    }

    else if (opcao === '4') {

        if (prazos.length === 0) {
            console.log("Cadastre um prazo primeiro!");
            continue;
        }

        let prazo = prazos[prazos.length - 1]; // pega último prazo

        let prioridade = "";

        if (prazo <= 2) {
            prioridade = "🔴 urgente";
        } else if (prazo <= 5) {
            prioridade = "🟠 alta";
        } else if (prazo <= 10) {
            prioridade = "🟡 média";
        } else {
            prioridade = "🟢 baixa";
        }

        prioridades.push(prioridade);

        console.log("Prioridade definida:", prioridade);
    }

    else if (opcao === '5') {
        console.log("Saindo do programa...");
    }

    else {
        console.log("Opção inválida. Tente novamente.");
    }
}