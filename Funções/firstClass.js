/* 

    Função - estrutura:
        1º Palavra reservada : Function
        2º Nome da função * não é obrigatório
        3º Parametros dentro dos colchetes
        4ª Bloco de comandos

*/

function fun1(){ } // Declaração Básica - function name(params){block of commands}



const fun = function () {} // Atribui uma função anonima a uma constante



const array = [function (a,b){ return a + b}, fun1, fun] // Atribuir uma função a um array
console.log(array[0](2,3))



const obj = {}
obj.falar = function (){ return 'Opa!'} // Função dentro de um objeto
console.log(obj.falar())



function run(run2){ // executar uma função dentro de outra função
    run2()
}
run(function(){ console.log('Executando')}) // invocar uma função com parametro



function soma(a,b){ // Passar uma função como retornar de outra função
    return function(c){
        console.log(a + b + c)
    }
}
soma(2,3)(4) // executar as duas funções

const somaResult = soma (2,3) // segunda maneira de executar
somaResult(4)



