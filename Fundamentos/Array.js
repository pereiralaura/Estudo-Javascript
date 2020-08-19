const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // undefined

valores[4] = 10 // Definiu o indice 4
valores[10] = 19 // Irá imprimir no espaço entre o ultimo indice e esse novo: <n empty items>

valores.push({id:3}, false, null, 'teste') // Adiciona valores ao Array

console.log(valores)
console.log(valores.length) // tamanho do array

console.log(valores.pop()) // Retira do Array o ultimo valor
delete valores[0] // deleta o valor do indice indicado

console.log(typeof valores) // diz o tipo do array = object