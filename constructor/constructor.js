// função construtora -> objetos 
// função fábrica -> objetos
//construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {

    //Atributos ou métodos privados.
    const ID = 123456;

    const metodoInterno = () => {

        console.log('Esse método só funciona aqui detro')
    }

    //Atributos ou métodos publicos.
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {

        console.log('Sou um método');
    };
    
}

const p1 = new Pessoa('Dudu', 'Bernardino');
const p2 = new Pessoa('Carla', 'Ale');
p1.metodo();
