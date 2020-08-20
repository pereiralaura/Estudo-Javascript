const imprimir = nota => { // ARROW FUNCTION
    switch(Math.floor(nota)){ // Switch com uma variavel
        case 10: // Caso o valor recebido seja 10, executará oq tiver depois dos ':'.
        case 9:  // Como não tem código dentro do case 10, ele executará para o 10 o mesmo que para o 9, pois não há um break para parar o código
            console.log('GG!')
            break // isso faz com que o swith não execute os códigos abaixo e saia do código - CASO NÃO TENHA ENTENDIDO: TESTE!
        case 8:
        case 7:
            console.log('Approves!')
            break
        case 6:
        case 5:
        case 4:
            console.log('Recu!')
            break
        case 3:
        case 2:
        case 1:
            console.log('Reprovess!')
            break
        default: // Caso não cumpra nenhum dos casos acima, ele estrará na condição padrão
            console.log('Nota inválida') // não necessário break por ser o último
    }
}

imprimir(10) // imprimirá GG
imprimir(8.9) // imprimirá Approves!
imprimir(6.55) // imprimirá Recu!
imprimir(2.3) // imprimirá Reprovess!

imprimir(-1) // Nota Inválida!
imprimir(11) // Nota Inválida!

/* Case - sempre número inteiro! Nunca número quebrado */