let vetor = [10, 20, 30, 40, 50];
let soma = 0;
let media = 0;

let maior = vetor[0];
let menor = vetor[0];

for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i];

    if (vetor[i] > maior) {
        maior = vetor[i];
    } else if (vetor[i] < menor) {
        menor = vetor[i];
    }
}

media = soma / vetor.length;

console.log("soma dos vetores é: " + soma);
console.log("media dos vetores é: " + media);
console.log("maior valor do vetor é: " + maior);
console.log("menor valor do vetor é: " + menor);