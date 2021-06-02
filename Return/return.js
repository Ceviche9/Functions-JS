function falaFrase(começo){
    
    function resto(resto) {
        return começo + ' ' + resto;  
    }
    // A função falaFrase está retornando a função que está dentro dela.
    return resto;
}

const ola = falaFrase('Olá');
console.log(ola('Mundo'));