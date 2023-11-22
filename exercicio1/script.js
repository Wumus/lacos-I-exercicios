function comerCoxinhas() {
  let conta = 0;
  let i = prompt("Digite 'S' para comprar coxinhas e 'N' para deixar de comprar: ").toUpperCase();
while (i === "S") { //Enquanto i for igual a S execute a pergunta
  i = prompt("Digite 'S' para comprar coxinhas e 'N' para deixar de comprar: ").toUpperCase();
  conta = conta + 2.5;
}
console.log("Conta total: R$",conta);
}

comerCoxinhas();
