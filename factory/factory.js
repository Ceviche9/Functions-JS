//Factory function

function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome,
        sobrenome,
        altura,
        peso,

        //getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        //setter
        set nomeCompleto(valor){
            //Vai me retornar um array com o nome e o sobrenome.
            valor = valor.split(' ');
            // vai me retirar o primeiro valor do array e me retornar ele.
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);

        },
        fala(assunto){
            return `${this.nome} está ${assunto}`;
        },
        // Getter
        get imc(){
            const indice = this.peso /(this.altura ** 2)
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Tundê' , 'Cavalcante', 1.7, 60);
p1.nomeCompleto = 'Dudu Bernardino da Silva Santos'
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala('Mudando seu nome'));


