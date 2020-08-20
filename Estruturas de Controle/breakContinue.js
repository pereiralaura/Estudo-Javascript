const nums = [1,2,3,4,5,6,7,8,9,10]

for (let x in nums){
    if(x == 5){
        break // faz quebrar o laço mais próximo ( apenas afeta os blocos for/switch/while)
    }
    console.log(`Indice ${x} é igual a ${nums[x]}`)
}



for (let y in nums){
    if (y == 5){
        continue //Ele pula a próxima repetição e pula para próxima // Imprimirá: ...4 é igual a 5 / 6 é igual a 7
    }
    console.log(`Indice ${y} é igual a ${nums[y]}`)
}






externo: for (a in nums){ // rótulo para esse for
    for (b in nums){
        if(a ==2 && b == 3){
            break externo // break externo para quebrar o laço do rótulo
        }
        console.log(a, b)
    }
}

/* Essa ultima estrutura não é utilizada atualmente! 
    para isso quebre ela em funções 
    assim organizará seu código
*/
