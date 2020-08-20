/* Parte 01 */

function boanoticia(nota){
    if(nota >= 7){ // se nota for maior ou igual a 7
        console.log(nota)
    }
}

boanoticia(9.4) // executar = imprimirá a nota
boanoticia(2.4) // executar = não imprimirá nada

function ifistrue(value){ 
    if(value){ // se for verdadeiro 
        console.log("is true:" + value)
    }
}

ifistrue()// executar = não imprimirá nada
ifistrue(null)// executar = não imprimirá nada
ifistrue(undefined)// executar = não imprimirá nada
ifistrue('')// executar = não imprimirá nada
ifistrue(0)// executar = não imprimirá nada

ifistrue(-1) // executar = imprimirá o valor
ifistrue(' ') // executar = imprimirá o valor
ifistrue('?') // executar = imprimirá o valor
ifistrue([]) // executar = imprimirá o valor
ifistrue([1,2]) // executar = imprimirá o valor
ifistrue({}) // executar = imprimirá o valor




/* Parte 02 */

const imprimirResult = nota => { // ARROW FUNCTION
    if(nota >= 7){
        console.log('Aprovado')
    }else{ // Caso o IF não seja atendido, passará ao ELSE
        console.log('Reprovado')
    }
}

imprimirResult(10) // executar = imprimirá Aprovado
imprimirResult(4) // executar = imprimirá Reprovado
imprimirResult('Opa!') // ERROR!






/* Parte 03 */

Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim;    // verifica se a nota atende as condições e retorna true ou false
}

const imprimirResultado = function (nota) {
    if(nota.entre(9, 10)){  // se a nota estiver entre os dois paramentros
        console.log('Boa!!!')
    } else if (nota.entre(7, 8.99)){ // se a nota não atingir a condição acima, testar essa!
        console.log('Approves')
    } else if(nota.entre(4, 6.99)){ // se a nota não atingir a condição acima, testar essa!
        console.log('Recuperação')
    }else if(nota.entre(0, 3.99)){ // se a nota não atingir a condição acima, testar essa!
        console.log('Reprovado')
    }else{ // caso não consiga se encaixar em nenhuma condição
        console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3) 
imprimirResultado(-1) // Imprimirá Nota inválida
imprimirResultado(11) // Imprimirá Nota inválida