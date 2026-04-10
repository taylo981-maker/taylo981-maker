const prompt = require('prompt-sync')()

let opcao = '';

let prazos = [];

let quantidadeperdida = [];

let setor = [];

let prioridade = [];

let descricao = []; 

while (opcao !== '5') {

    console.log ( "\n== MENU == ")

    console.log ("1. prazo");

    console.log ("2. quantidade perdida");

    console.log ("3. setor");

    console.log ("4. prioridade");

    console.log ("5. sair");

    opcao = prompt(" opcao: ");

    const produtos = Number(prompt("Difine o prazo do produto: "));
    const perdas = Number(prompt("Difine a quantidade perdida do produto: "));
    const setores = Number(prompt("Difine o setor do produto: "));
    const proridades = prompt("Difine a prioridade do produto: ");

descricao.push({prazos, quantidadeperdida, setor, prioridade});

    if (opcao === '1') {


        let prazo = prompt("prazo: ");
        prazos.push(prazo);
    } 

    else if (opcao === '2') {

        let quadtidade = prompt("quantidade perdida: ");
        quantidadeperdida.push(quadtidade) ;
    } 

    else if (opcao === '3') {

        let setor = prompt("setor: ");
        setor.push(setor);
    }

    else if (opcao === '4') {

        let prioridade = prompt("prioridade: ");
        prioridade.push(prioridade) ;
    }}