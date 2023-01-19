// Callback functions
// forEach chamando uma função declarada fora dela:
// forEach tem como parâmetro obrigatoriamente uma função

const nome = ["Ana", "Bia", "Cleo", "Deh"];

nome.forEach(ImprimeNome);

function ImprimeNome (nome){
    console.log(nome);
}

// forEach tbm pode ter como 2º param o índice:
// nome.forEach(ImprimeNome, indice);

//Exemplo: adicionando ponto extra num array de notas:

const notas = [10, 9, 8, 7, 6];

const notasAtualizadas = notas.map(nota => nota + 1);
console.log(notasAtualizadas);

//Acrescentando um operador ternário para verificar se nota = 10, não incrementa:
//Operador ternário:  condição ? true : false
                 // nota == 10 ? nota : ++nota
                 
const notasAtualizadas2 =notas.map( nota => nota ==10 ? nota : ++nota) ;
console.log(notasAtualizadas2);







