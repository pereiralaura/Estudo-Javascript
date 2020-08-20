function getRandonInteger(min, max) {  // Conseguir um inteiro aleatório entre o minimo e o máximo
    const value = Math.random() * (max-min) + min 
    return Math.floor(value)
}

let opcao = 0
 
while (opcao != -1){ // Enquanto a opção for diferente de -1, ele executará o bloco abaixo
    opcao = getRandonInteger(-1,10)
    console.log(`A opção é ${opcao}.`)
}
console.log('Fim!')