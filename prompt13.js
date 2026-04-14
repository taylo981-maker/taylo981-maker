const prompt = require('prompt-sync')();

let opcao = '';

let prazos = [];

let quantidadeperdida = [];

let setores = [];

let prioridades = [];


function calcularPrioridades() {
    prioridades = []; 
    for (let i = 0; i < prazos.length; i++) {
        let prazo = prazos[i];
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

        prioridades[i] = prioridade;
    }
}

function listarPedidos() {


    if (prazos.length === 0) {
        console.log("\n❌ Nenhum pedido cadastrado.");
        return;
    }

    calcularPrioridades();

    console.log("\n" + "=".repeat(85));
    console.log("    | Setor               | Prazo (dias) | Qtd Perdida | Prioridade   ");
    console.log("    |-------------------|--------------|-------------|--------------");

    for (let i = 0; i < prazos.length; i++) {

        let setor = (setores[i] || "N/A").padEnd(19);

        let prazoStr = prazos[i].toString().padEnd(11);

        let qtdStr = (quantidadeperdida[i] || 0).toString().padEnd(11);

        let prio = (prioridades[i] || "N/A").padEnd(12);


        console.log(`    | ${setor} | ${prazoStr} | ${qtdStr} | ${prio}`);
    }


    console.log("=".repeat(85));

    console.log(`\nTotal de pedidos: ${prazos.length}`);
}

while (opcao !== '7') {
    console.log("\n== MENU PEDIDOS ==");
    console.log("1. prazo");
    console.log("2. quantidade perdida");
    console.log("3. setor");
    console.log("4. calcular prioridade (ultimo)");
    console.log("5. calcular todas prioridades");
    console.log("6. Listar pedidos");
    console.log("7. sair");

    opcao = prompt("Opção: ");

    if (opcao === '1') {

        let prazo = Number(prompt("Prazo (dias): "));

        if (isNaN(prazo) || prazo < 0) {


            console.log("Prazo inválido!");
            continue;
        }

        prazos.push(prazo);

        console.log(`Prazo ${prazo} cadastrado!`);

    } else if (opcao === '2') {

        let quantidade = Number(prompt("Quantidade perdida: "));
        if (isNaN(quantidade) || quantidade < 0) {
            console.log("Quantidade inválida!");
            continue;
        }
        if (quantidadeperdida.length < prazos.length) {
            quantidadeperdida.push(quantidade);
        } else {
            quantidadeperdida[quantidadeperdida.length - 1] = quantidade;
        }


        console.log(`Qtd perdida ${quantidade} cadastrada!`);



    } else if (opcao === '3') {
        let setorInput = prompt("Setor: ").trim();
        if (setores.length < prazos.length) {
            setores.push(setorInput);
        } else {
            setores[setores.length - 1] = setorInput;
        }
        console.log(`Setor ${setorInput} cadastrado!`);



    } else if (opcao === '4') {
        if (prazos.length === 0) {
            console.log("Cadastre um prazo primeiro!");
            continue;
        }
        let ultimoIndex = prazos.length - 1;
        let prazo = prazos[ultimoIndex];7
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
        prioridades[ultimoIndex] = prioridade;
        console.log("Prioridade definida para último:", prioridade);



    } else if (opcao === '5') {
        calcularPrioridades();
        console.log("Todas prioridades calculadas!");

    } else if (opcao === '6') {
        listarPedidos();

    } else if (opcao === '7') {
        console.log("Saindo do programa...");
        break;

    } else {
        console.log("Opção inválida. Tente novamente.");
    }
}

console.log("Programa encerrado.");
