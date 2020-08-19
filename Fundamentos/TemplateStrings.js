const nome = "Lucas"
const concat = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!` // Template Strings aceita quebra de linha, expressões, variaveis

console.log(concat, template)

// expressões...
console.log(`1 + 1 = ${1 + 1}`) // Ele irá executar a expressão dentro das chaves

const up = texto => texto.toUpperCase() // ARROW FUNCTION
console.log(`Ei... ${up('cuidado')}!`) // função dentro do template string
