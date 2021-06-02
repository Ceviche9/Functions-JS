function criaMulti(multiplicador){

    //multiplicador:
    return function(n) {
        return n * multiplicador;
    };

   

}

const duplica = criaMulti(2);
const triplica = criaMulti(3);
const quadruplica = criaMulti(4);

console.log(duplica(10));
console.log(triplica(10));
console.log(quadruplica(10));