const prod1 = {}
prod1.nome = "Lucas Fernandes" // pode definir atributos dinamicamente
prod1.idade = 19 
prod1['estudante'] = true

console.log(prod1)

const prod2 = {
    nome: 'Celular Moto G6 Plus',
    preco: 898.00,
    obj:{ // é possivel ter um objeto dentro de outro objeto
        blabla:1,
        obj: {
            blabla:2
        }
    }
} // é possivel ter mais de um atributo do mesmo nome, portanto que não esteja no mesmo escopo

console.log(prod2)