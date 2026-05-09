let matriz = [];

let linha = 3;
let colunas = 4;
let contador = 1;

for (let i = 0 ; i < linha; i++){
    matriz[i] = [];

    for (let j = 0; j < colunas; j++) {
        matriz[i][j] = contador;
        contador++;
    }
}

console.log (matriz);a