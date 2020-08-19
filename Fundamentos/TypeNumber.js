// Tipo Númerico
const peso1 = 1.0 // Modelo Padrão de Definição - Se for .0 considera como inteiro. Se tiver algum valor > 0 = ponto flutuante
const peso2 = Number('2.0') // Transforma String in Number

console.log(peso1, peso2) 
console.log(Number.isInteger(peso1)) // Verfica se é um inteiro = TRUE

const av1 = 9.871
const av2 = 6.871

const total = av1 * peso1 + av2 * peso2
const media = total / (peso1/peso2)

console.log(media.toFixed(2)) // .toFixed define quantas casas decimais 
console.log(media.toString()) // .toString() transforma number em string
console.log(media.toString(2)) // .toString(2) transforma number em binário
console.log(typeof media) // Mostra o tipo da variável
console.log(typeof Number) // Number com N maisculo é uma função



/* !Cuidados! */

console.log( 7 / 0 ) // Valor infinito = tipo Infinity
console.log("10"/2) // Ele consegue transformar String com um valor inteiro em Numérico
console.log("Show!" *2) // NaN invés de Imprimir 2 vezes 'Show!'
// console.log(10.toString())  Não é possível executar Unexpected
console.log((10).toString()) // Este ele consegue transformar em String
console.log((10.345).toFixed(2)) // Para definir casas decimais em números literais
