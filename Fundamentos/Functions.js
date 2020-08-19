console.log(typeof Object) // O Object do Javascript é uma Função

class Produto {} // Uma classe é uma função
console.log(typeof Produto)






// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}
imprimirSoma(2,3)
imprimirSoma(2) // Se passar apenas um valor, o outro será undefined
imprimirSoma(2,3,4,5) // Irá ignorar o resto que não tem utilidade
imprimirSoma() // NaN


// Função com retorno
function soma(a,b = 0){ // Pode definir um valor padrão na definição dos parametros
    return a + b
}
console.log(soma(2,3))
console.log(soma(2)) 






/* Armazenando uma função em uma variavel */
const fazerSoma = function(a,b) {
    console.log(a + b)
}
fazerSoma(2,3)

/* Armazenando uma função arrow em uma variavel */
const somando = (a, b) => {
    return a + b
}
console.log(somando(2,3))

/* Retorno Implícito */
const sub = (a, b) => a - b

console.log(sub(2,3))

/* Caso apenas 1 paramentro */
const imprimir2 = a => console.log(a)