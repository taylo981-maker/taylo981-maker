const prompt = require('prompt-sync')();


function calcularSalarioBruto(horas, valorHora) {
    let salarioBruto = horas * valorHora;
    return salarioBruto;
}

function calcularSalarioFinal(salarioBruto) {
    if (salarioBruto < 2000) {
        let bonus = 200;
        let salarioFinal = salarioBruto + bonus;
        return salarioFinal;
    } else {
        return salarioBruto;
    }
}

let nome = prompt("Digite o nome do funcionario: ");
let horas = Number(prompt("Digite as horas trabalhadas: "));
let valorHora = Number(prompt("Digite o valor da hora: "));


let salarioBruto = calcularSalarioBruto(horas, valorHora);


let salarioFinal = calcularSalarioFinal(salarioBruto);


console.log("Nome:", nome);
console.log("Salario bruto:", salarioBruto);
console.log("Salario final:", salarioFinal);