const prompt = require("prompt-sync")();

let opcao = '';
let alunos = [];

while (opcao !== '4') {

    console.log("\n=== Menu ===");
    console.log("1. Cadastrar aluno");
    console.log("2. Listar alunos");
    console.log("3. Verificar nota");
    console.log("4. Sair");

    opcao = prompt("Opcao: ");

    if (opcao === '1') {

        const nome = prompt("nome do aluno: ");
        const idade = prompt("idade do aluno: ");
        const nota = Number(prompt("nota do aluno: "));

        alunos.push({ nome, idade, nota });

        console.log(`Aluno ${nome} cadastrado com sucesso!`);

    } else if (opcao === '2') {

        console.log("\n=== Lista de alunos ===");

        alunos.forEach((aluno, index) => {

    let status = aluno.nota >= 7 ? "Aprovado" : "Reprovado";

    console.log(`${index + 1}. ${aluno.nome} - Idade: ${aluno.idade} - Nota: ${aluno.nota} - ${status}`);
});

    } else if (opcao === '3') {


        const aluno = alunos.find(a => a.nome === nomeBusca);

        if (aluno) {
            if (aluno.nota >= 7) {
                console.log(`Aprovado! Nota: ${aluno.nota}`);
            } else {
                console.log(`Reprovado! Nota: ${aluno.nota}`);
            }
        } else {
            console.log("Aluno não encontrado.");
        }

    } else if (opcao === '4') {

        console.log("exit...");

    } else {

        console.log("Opção inválida.");
    }
}