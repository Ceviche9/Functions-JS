//O closure está relacionado ao escopo léxico da função.
function returnFun(nome){

    return function() {
        return nome;

    };

}

const fun = returnFun('Tundê');
const fun2 = returnFun('Dudu');

console.dir(fun);
console.dir(fun2);

