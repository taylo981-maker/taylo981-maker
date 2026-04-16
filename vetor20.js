const prompt = require('prompt-sync')();

let valores = [];
let opcao;

do {
    opcao = parseInt(prompt(
        "\nMENU:\n" +
        "1 - Preencher vetor\n" +
        "2 - Somar elementos\n" +
        "3 - Calcular média\n" +
        "4 - Maior e menor valor\n" +
        "5 - Buscar elemento\n" +
        "0 - Sair\n" +
        "Escolha uma opção:"
    ));

    switch (opcao) {

        case 1:
            let tamanho = parseInt(prompt("Quantos elementos?"));
            valores = []; // limpa
            for(let i = 0; i < tamanho; i++) {
                let elem = parseFloat(prompt(`Elemento ${i+1}:`));
                valores.push(elem);
            }
            console.log("Vetor preenchido:", valores);
            break;

        case 2:
            if (valores.length === 0) {
                console.log("Vetor vazio! Use opção 1 primeiro.");
            } else {
                let soma = 0;
                for(let i = 0; i < valores.length; i++) {
                    soma += valores[i];
                }
                console.log("Soma dos elementos do vetor:", soma);
            }
            break;

        case 3:
            // TODO: média
            console.log("Função em desenvolvimento.");
            break;
        case 4:
            // TODO: maior/menor
            console.log("Função em desenvolvimento.");
            break;
        case 5:
            // TODO: buscar
            console.log("Função em desenvolvimento.");
            break;

        case 0:
            console.log("Encerrando...");
            break;

        default:
            console.log("Opção inválida!");
    }

} while (opcao !== 0);

