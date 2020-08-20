/* 
    do While garante que pelo menos uma vez será feita a repetição
*/

function getRandonInteger(min, max) {  // Conseguir um inteiro aleatório entre o minimo e o máximo
    const value = Math.random() * (max-min) + min // Calcula um número aleatório entre o min e o max
    return Math.floor(value) // retorna o valor arredondado para baixo
}

let opcao = 0
 
do{ // Faça!
    opcao = getRandonInteger(-1,10) // opção recebe o valor resultante da função getRandonInteger()
    console.log(`A opção é ${opcao}.`)
}while (opcao != -1) // enquanto opção é diferente de -1

console.log('Fim!')