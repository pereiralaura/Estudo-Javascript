let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 //inteiro
console.log(!!isAtivo) //boolean = true

isAtivo = 0 //inteiro
console.log(!isAtivo) //boolean = false


/* Verdadeiro */
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

/* Falso */
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

/* Considerações */
console.log(!!('' || null || ' ')) // Utilizando 'ou' para testar os parametros

let nome = ''
console.log(nome || 'Desconhecido') // Se não tiver nome, imprimirá Desconhecido