let soma =  0;

for (let i = 0; i <10;i++) {

    let num = parseInt(prompt("Digite o numero: " + (i + 1) + ": "));

    if(num > 0) {

        soma += num;
    } 
}
console.log("Soma dos números positivos: " + soma);