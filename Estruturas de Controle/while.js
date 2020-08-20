function getRandonInteger(min, max) {  // Conseguir um inteiro aleatório entre o minimo e o máximo
    const value = Math.random() * (max-min) + min // Calcula um número aleatório entre o min e o max
    return Math.floor(value) // retorna o valor arredondado para baixo
}

let opcao = 0
 
while (opcao != -1){ // Enquanto a opção for diferente de -1, ele executará o bloco abaixo
    opcao = getRandonInteger(-1,10) // opção recebe o valor resultante da função getRandonInteger()
    console.log(`A opção é ${opcao}.`)
}
console.log('Fim!')