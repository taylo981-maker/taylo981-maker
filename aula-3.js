var carrinho_compras = 250
var desconto = 0.10
var compras_feitas = (carrinho_compras + desconto)

console.log(compras_feitas)

if(compras_feitas >=100) {
    console.log("com desconto");
} else {
    console.log("sem desconto");
}
