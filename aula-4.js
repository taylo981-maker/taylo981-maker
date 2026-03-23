let idade = 16;
let tem_autorizaçao = true;

if (idade >= 18) {
    console.log("acesso liberado");
} else if (idade >= 16 && tem_autorizaçao) {
    console.log ("acesso liberado");
} else {
    console.log("acesso negado");
}

