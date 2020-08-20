const pessoa = {
    saudacao: 'Bom dia!',
    falar (){ // função dentro do objeto
        console.log(this.saudacao) // this = está ligado ao objeto
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // undefined - conflito Funcional e Orientado a Objetos (this mudou o local)

const falardePessoa = pessoa.falar.bind(pessoa) // .bind() fará o this continuar apontando para o lugar correto
falardePessoa() // problema resolvido com o Bind

