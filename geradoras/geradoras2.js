//Delegando tarefas de um gerador para outro.

function* geradora() {

    yield 0;
    yield 1;
    yield 2;
}

function* geradora2() {

    yield* geradora();
    yield 3;
    yield 4;
    yield 5;

}

const g2 = geradora2();
for( let valor of g2) {

    console.log(valor);
}