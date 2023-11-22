function tabuada(numero, soma) {
    numero = +prompt("Digite um número: ") // variavél "número" recebe prompt numérico do usuário 
    
    for (let  i = 1; i <= 10; i++) { //variável i = 1 // enquanto a variável for igual ou menor que 10, faça i++ (incrementar de 1 em 1) 
        soma = i*numero //soma recebe i * número do usuário
        console.log(`${numero} x ${i} é igual: ${soma}`) //imprime a soma e depois volta pro começo e o i vai ser 2 porque inrementou +1
    }
}

tabuada()