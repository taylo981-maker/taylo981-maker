let consumo = [15 , 20, 10, 25, 30,  5, 12];
let totalConsumo = 0;
let diasmaiorconsumo = 0;
let consumocritico = false 
;

for (let i = 0; i < consumo.length; i++){
    let valor = consumo[i];
    totalConsumo += valor;
    if (valor > consumo[diasmaiorconsumo]) {
        diasmaiorconsumo = i;
    }
    if (valor > 25) {
        consumocritico = true;
    }
}   
let mediaConsumo = totalConsumo / consumo.length;

console.log("Média de consumo: " + mediaConsumo.toFixed(2) + " kWh");
console.log("Dia com maior consumo: Dia " + (diasmaiorconsumo + 1) + " com " + consumo[diasmaiorconsumo] + " kWh");
console.log("Dias com consumo crítico (acima de 25 kWh): " + consumocritico);