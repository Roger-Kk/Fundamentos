// Com tipos primitivos (string, number, boolean, null, symbol) é possível
// acessar outros objetos por cópia. Ex: 

let num = 50;
let num2 = num;

num2 = 100
console.log(num) // 50
console.log(num2) //100


//Porém com Objetos, o JavaScript acessa os valores deles fazendo referência
// ao original. Mas não cria uma cópia. Dessa forma, se alterar a referência, 
// altera o original. 

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
   
const objPersonagem2 = objPersonagem;
console.log(objPersonagem); 
console.log(objPersonagem2);

//Se alterar apenas o objPersonagem2, altera tanto o objPersonagem quanto o objPersonagem2: 

objPersonagem2.nome = 'Gandalf, o Cinzento';

console.log(objPersonagem.nome) //Gandalf, o Cinzento
console.log(objPersonagem2.nome) //Gandalf, o Cinzento

//Voltando o valor de objPersonagem para 'Gandalf'
objPersonagem.nome = 'Gandalf'; 

// Para contornar essa situação, pode-se utilizar o método Object.create(), 
// passando como parâmetro o objeto Object.create(objeto)
//O método Object.create() cria um novo objeto utilizando como protótipo o 
//objeto passado via parâmetro. Dessa forma, objPersonagem2 é uma instância 
//diferente de objPersonagem e pode ser trabalhada de forma independente.

const objPersonagem3 = Object.create(objPersonagem)
objPersonagem3.nome = "Gandalf, o Mago"

console.log(objPersonagem.nome) //Gandalf
console.log(objPersonagem3.nome) //Gandalf, o Cinzento







