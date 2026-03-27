let estoquebaixo = [1, 3, 5, 10, 50];

let estoquealto = [50, 60, 70, 80, 90, 100, 110];

let totalEstoque = 0;
let semEstoque = 0;
let baixoEstoque = 0;
let totalReposicoes = 0;

for (let i = 0; i < estoquebaixo.length; i++){
    console.log(estoquebaixo[i]);
    totalEstoque += estoquebaixo[i];
    if (estoquebaixo[i] === 0){
        semEstoque++;
        console.log("Produto sem estoque: " + estoquebaixo[i]);
    } else if (estoquebaixo[i] < 5){
        baixoEstoque++;
        console.log("Estoque baixo: " + estoquebaixo[i]);
        totalReposicoes += (5 - estoquebaixo[i]);
    }
}

for (let i = 0; i < estoquealto.length; i++){
    totalEstoque += estoquealto[i];
}

console.log("Total do estoque: " + totalEstoque);
console.log("Produtos sem estoque: " + semEstoque);
console.log("Produtos com estoque baixo: " + baixoEstoque);
console.log("Total de reposições necessárias: " + totalReposicoes);