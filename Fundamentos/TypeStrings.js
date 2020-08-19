const escola = "CreativeLura"

console.log(escola.charAt(4)) // Imprime a letra especificada pelo indice passado
console.log(escola.charAt(10000)) // Se não houver uma letra no indice passado ele não imprimirá null
console.log(escola.charCodeAt(3)) // Recebo o valor ASCI da letra que está Localizada nesse indice
console.log(escola.indexOf('L')) // Recebo o indice da Letra que foi colocada como parametro
console.log(escola.substring(1)) // Imprime do Indice para Frente
console.log(escola.substring(1,3)) // Imprime do indice do primeiro paramentro até o segundo indice no segundo parametro

console.log('Escola '.concat(escola).concat("!")) // Concatenação de Strings
console.log('Escola ' + escola + "!") // Concatenação de Strings
console.log(escola.replace(3, 'e')) // Troca a letra definida pelo que esta no indice
console.log(escola.replace(/\d/, 'e')) // Substitui todos os digitos dentro do texto pela letra definida no parametro // REGEX
console.log(escola.replace(/\w/g, 'e')) //Substitui TUDO pela letra definida no parametro  // REGEX

console.log('Lucas,Fernandes,Pereira,Felix'.split(',')) // Gera um ARRAY separando a string pela ","
console.log('Lucas,Fernandes,Pereira,Felix'.split(/,/)) // Gera um ARRAY separando a string pela "," // REGEX
