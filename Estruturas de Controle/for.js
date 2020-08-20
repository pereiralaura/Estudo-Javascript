/* 

    For é divido em três partes:
    1ª:
        declaração da variavel a ser utilizada (preferencia let, a não ser que será utilizada fora do bloco)
            ex: let i = 0 // var i = 0
    2ª:
        condição para o laço
            ex: i>10 // i != 10
    3ª:
        incremento
            ex: i++ // --i

*/

for(let i = 0; i > 10; i++){ 
    console.log(`i = ${i}.`)
}





const notas = [5.6, 2.5, 1.6, 10, 8.9, 5.9]

for (i = 0; i < notas.length; i++){ // For com Array! // .lenght = tamanho do array
    console.log(`nota = ${notas[i]}`) // nesse caso o i será o indice do array, enquanto ele aumentar, entrará em outro valor do array
}

console.log(i) // ERROR! - como ela foi definida com Let, não tem acesso fora do bloco