//funções geradoras

function* geradora1() {

    //(código)
    yield 'valor 1';
    //(código)
    yield 'valor 2';
    //(código)
    yield 'valor 3';
    //(código)
}

const g1 = geradora1();
console.log(g1.next());
console.log(g1.next().value);
//O for vai continuar de onde a função parou.
for(let valor of g1) {

    console.log(valor);
}