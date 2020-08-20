const notas = [5.6, 2.5, 1.6, 10, 8.9, 5.9]

for (let i in notas){ // maneira simplificada de navegar pelo array com o for - utilizando o IN
    console.log(`Indice = ${i} para a nota ${notas[i]}`)
}





const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Fernandes',
    idade: 19
}

for(let attr in pessoa){ // Utilizando for In com um objeto
    console.log(`${attr} = ${pessoa[attr]}`)
}