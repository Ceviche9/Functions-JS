function Calculadora() {

    this.display = document.querySelector('.display');

    this.start = () => {
        alert('Olá');
        clickBtn();

    }

    clickBtn = () => {

        document.addEventListener('click', (e)=>{

            const el = e.target;

            if(el.classList.contains('btn-num')){

             this.display.value += el.innerText;
             this.display.focus();
                
            }

            if(el.classList.contains('btn-clear')){

                this.display.value = '';
                
            }

            if(el.classList.contains('btn-del')){

                del();
                
            }
            
            if(el.classList.contains('btn-result')){

                result();
                
            }

            

            
        

        })


    }

    del = () => {

        let valor = this.display.value;
        this.display.value = valor.slice(0, -1);

    }

    result = () => {

        try{

            const conta = eval(this.display.value);

            if(!conta) {
                
            alert('Conta inválida');
            return;
            }
            
            this.display.value = conta;


        }catch(e) {

            alert('Conta Inválida')

        }
        

    }




}


const c1 = new Calculadora();
c1.start();