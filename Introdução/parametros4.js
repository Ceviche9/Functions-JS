function conta(operador, resultado,...números){
    
    for (let num of números){
        if (operador === '+') resultado += num;
        if (operador === '-') resultado -= num;
        if (operador === '*') resultado *= num;
        if (operador === '/') resultado /= num;
    }
 
    console.log(resultado);
    console.log(números);
}

conta('+', 0, 20, 30, 40, 50);