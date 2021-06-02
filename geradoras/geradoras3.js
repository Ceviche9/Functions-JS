function* geradora() {

    yield function() {
        console.log('Vim do y1');
    
    };

    yield function() {

        console.log('Vim do y2');
    }
}

const g1 = geradora();

const func1 = g1.next().value;
const func2 = g1.next().value;

func1();
func2();

//Usar um return em uma função geradora faz com que ela termine.