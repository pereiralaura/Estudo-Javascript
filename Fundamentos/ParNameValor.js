// par nome/valor

const saudacao = 'opa' // contexto léxico 1 - local fisico onde foi variavel

function exec(){
    const saudacao = 'Falaaa' // contexto léxico 2 - local diferente aonde se localiza comparada ao primeiro
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Lucas',
    idade: 19,
    peso: 93,
    endereco:{
        longradouro: 'São Paulo',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)