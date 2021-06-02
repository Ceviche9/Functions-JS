
function Pessoa(altura, peso, frase) {

   this.altura = altura
   this.peso = peso
   this.frase = frase 

   this.fala = () => {

    console.log(frase);

   }

}

function* gen(obj) {

    let altura = obj.altura;
    let peso = obj.peso;
    let imc = peso/ (altura**2);

    function valor(imc) {

        if(imc >= 40.0 ) {

            console.log('Obesidade III')
        }
        if(imc >= 30.0){

            console.log('Obesidade II')
        }
        if(imc >= 25.0) {

            console.log('Obesidade I')
        }
        if(imc >= 18.5) {

            console.log('Normal')
        }
        if(imc <= 18.5) {
            console.log('Magreza')
        }

    }

    yield valor(imc);

    function falar(obj) {

        obj.fala();
    }

    yield falar(obj);


}


const p1 = new Pessoa(1.75, 62, 'Deu certo');
const g1 = gen(p1);
g1.next().value
g1.next().value

