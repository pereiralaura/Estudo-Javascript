function Pessoa(){
    this.idade = 0

    const self = this // por ser uma constante é possível estar mantendo o this (alterando this por self)
    setInterval(function(){
        self.idade++ // NaN pois o This sem o bind não reconhece aonde está amarrado
        console.log(self.idade)
    }/* .bind(this) */, 1000)// Bind faz com que ele aponte para a idade dentro da function
}

new Pessoa // exec