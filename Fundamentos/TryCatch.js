/* function imprimirNome(obj){
    console.log(obj.name.toUpperCase() + '!!!')
}

const obj = { nome: 'Lucas' }
imprimirNome(obj) - ERROR */

function tratarError(erro){
    // throw new Error('...: ' + erro) // Enviar mensagem de erro! - Pode ser qualquer um!
    throw { // objeto
        nome: erro.nome,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNome(obj){
    try { // Tente
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { // Capture o Erro caso aconteça
        tratarError(e) // function para tratar o erro
    } finally{
        console.log('Fim do Programa') // Finaliza tudo independente de try ou catch
    }
}

const obj = { nome: 'Lucas' }
imprimirNome(obj)



/* EVITE MOSTRAR DETALHES DE INFRAESTRUTURA PARA O CLIENTE */