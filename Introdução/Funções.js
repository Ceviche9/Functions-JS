// Declaração de função (Function hoisting)
falaOi();
function falaOi() {
    console.log('Oi');

}

// As funções são First class objects.
// Function expression.

const Dado = function() {
    console.log('Sou um Objeto de primeira classe');
}
Dado();

function executarFuncao(funcao){
    console.log('Vou executar sua função');
    funcao();
}

executarFuncao(Dado);

// Arrow function.

const arrow = () => {
    console.log('Sou uma arrow function')
}
arrow();

// Dentro de um Objeto.

const obj = {
    falar: function() {
        console.log('Estou falando...')

    }

}

obj.falar();
