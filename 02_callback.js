//Callback function é uma função que tem como parâmetro outra função: 
function print(callback) {  
    callback();
}

//Exemplo: A função setTimeout tem a const mensagem como parâmetro que é uma função que exibe msg na tela. 
setTimeout(mensagem, 3000);

const mensagem = function() {  
    console.log("Essa mensagem é exibida depois de 3 segundos");
}

//Como alternativa podemos escrever a função dentro do parâmetro da outra função ao invés de chamá-la: 
setTimeout(function() {  
    console.log("Essa mensagem é exibida após 3 segundos");
}, 3000);

//Ainda podemos usar uma arrow function (ES6) para escrever a função que vai como parâmetro: 
setTimeout(() => { 
    console.log("Essa mensagem é exibida após 3 segundos");
}, 3000);


// Examples: 
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
                 
const notasAtualizadas2 = notas.map( nota => nota ==10 ? nota : ++nota) ;
console.log(notasAtualizadas2);







