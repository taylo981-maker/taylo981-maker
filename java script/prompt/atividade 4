let inter1 = 0, inter2 = 0, inter3 = 0, inter4 = 0;

while (true) {
    let input = prompt("Digite um número (negativo para sair):");
    if (input === null) break; 
    let num = parseInt(input, 10);
    if (isNaN(num)) continue; 
    if (num <= 0) break; 

    if (num <= 25) {
        inter1++;
    } else if (num <= 50) {
        inter2++;
    } else if (num <= 75) {
        inter3++;
    } else if (num <= 100) {
        inter4++;
    }
}

console.log("Intervalo 0-25 - qtdd: " + inter1);
console.log("Intervalo 26-50 - qtdd: " + inter2);
console.log("Intervalo 51-75 - qtdd: " + inter3);
console.log("Intervalo 76-100 - qtdd: " + inter4);
