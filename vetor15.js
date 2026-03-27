let temperatura = [30, 32, 28, 80, 90, 100, 110];

let acimade80 = 0;

let soma = 0;

let acimade90 = 0;
for (let i = 0; i < temperatura.length; i++){
    console.log(temperatura[i])
    soma += temperatura[i];
    if (temperatura[i] >= 80){
        acimade80++
    } if (temperatura[i] >= 90){
        acimade90++
    }
}

let media = soma / temperatura.length;

console.log("Temperaturas acima de 80°C: " + acimade80);

console.log("Alerta crítico: " + acimade90 + " leituras acima de 90°C");

console.log("Média das temperaturas: " + media.toFixed(2) + "°C");