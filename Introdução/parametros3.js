 //Atribuição via desestruturação.
 function teste({nome, sobrenome, idade}){

    console.log(nome, sobrenome, idade)

 }

 teste({nome: 'Tundê', sobrenome: 'Cavi', idade: 21})
 // ou 
 let obj = {nome: 'Tundê', sobrenome: 'Cavi', idade: 21}
teste(obj);
