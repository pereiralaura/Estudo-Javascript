console.log(Math.ceil(6.1)) // Arredondamento = 7

const obj1 = {}
obj1.nome = 'Bola'

function Obj(nome){
    this.nome = nome // this = nome do objeto ao qual a propriedade esta associada // Ela fica pública
    this.exec = function(){
        console.log('Exec....')
    }
}

const obj2 = new Obj('Cadeira') // utilizando o 'new' para criar um objeto a partir da função Obj
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()
obj3.exec()