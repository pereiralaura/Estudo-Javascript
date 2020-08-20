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