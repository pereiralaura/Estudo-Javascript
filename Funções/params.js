function soma(){ // buscar os parametros passados sem ter definido
    let soma = 0
    for (i in arguments){ // através da palavra reservada arguments 
        soma += arguments[i] // percore a quantidade de argumentos
    }
    return soma // retorna o resultado
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1,2.2,3.3)) // soma
console.log(soma('Olá', 2.2, "Slaaa")) // Concatena!