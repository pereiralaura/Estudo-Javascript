/* parte 01 */
const pessoa = {
    nome: 'Lucas Fernades',
    idade: 19,
    endereco: {
        rua: 'Rua São Paulo',
        numero: 01032020
    }
}

const { nome, idade } = pessoa // Tire esses parametros do objeto
console.log(nome, idade)

const { nome : n, idade: i} = pessoa // Tire esses parametros do objeto e guarde elas em variaveis
console.log(n , i);

const { sobrenome, bemHumorada = true} = pessoa // Se não houver parametro, nem valor padrão, ele imprimirá undefined
console.log( sobrenome, bemHumorada)

const {endereco:{rua, numero, cep}} = pessoa // como extrair de dentro de outro objeto
console.log( rua, numero, cep)

const { conta: { ag, num}} = pessoa // dado aninhado, o caminho para ele precisa estar setado. ERROR!!!
console.log(ag,num)

/* parte 02 */

const [a] = [10]
console.log(a)

const [n1,,n3,,n5,n6 = 0] = [10, 7 , 9, 8] // define arrays com variaveis
console.log(n1,n3,n5,n6) // Desestruturar um array

const [,[, nota]] = [[,8,8],[9,6,8]] // Array dentro de outro array - aninhado
console.log(nota);

/* parte 03 */

function rand({min = 0, max = 1000}){ // Passar um objeto para função, e tire os dois atributos prontos
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
} 

const obj = {max:50, min: 40}
console.log(rand(obj)) // Randon entre os paramentros min e max
console.log(rand({ min: 955 })) // Randon entre 955 e o max
console.log(rand({})) // Random entre 0 e 1000
console.log(rand()) // ERROR

/* Parte 04 */

function rand2([min = 0, max = 1000]){
    if(min > max) [min,max] = [max,min]
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

console.log(rand2([50, 40])) // Chamando como array - random entre 50 e 40
console.log(rand2([992])) // random entre 992 e max
console.log(rand2([, 10])) // random entre  min e 10
console.log(rand2([])) // random entre min e max
console.log(rand()) // ERROR - desistruturar algo undefined ou null