let notas = [9, 4, 2, 10, 5];
let soma = 0;
let aprovados = 0;
let reprovados = 0;
let maiorNota = notas[0];

for (let i = 0; i < notas.length; i++){
    let nota = notas[i];
    soma += nota;   

    if (nota >= 7) {
        aprovados++;
    } else {
        reprovados++;
    }

    if (nota > maiorNota) {
        maiorNota = nota;
    }
}

let media = soma / notas.length;

console.log("Média das notas: " + media);
console.log("Alunos aprovados: " + aprovados);
console.log("Alunos reprovados: " + reprovados);
console.log("Maior nota: " + maiorNota);