for (var i = 0; i < 10; i++){ //define variavel - condição - incremento
    console.log(i)
}
console.log("i =", i) // por ter sido definida com a palavra VAR, então ele pode ser acessado externamente



/* ==================================== */

const funcs = []

/* Teste com Var */
for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]() // Imprime 10 por causa do escopo do var
funcs[8]() // Imprime 10 por causa do escopo do var




/* Teste com Let */
for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]() // Imprime 2
funcs[8]() // Imprime 8
