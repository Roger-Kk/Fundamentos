
//Para rodar os desafios, utilize o terminal do Visual Studio com o Node.js através do comando node 'nomeDoArquivo.js'
//Instale a biblioteca com a função prompt() através do comando: "npm install prompt-sync"
var prompt = require('prompt-sync');
var prompt = prompt();



//Day 01
//Desafio para comparar variáveis. 


console.log('\n' + 'Day 01 - INÍCIO: ');

let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

if (numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (numeroTrinta === stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (numeroDez == stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
console.log('Day 01 - FIM'+'\n'); 

//=================================================================================================

//Day 02
//Desafio 2. Perguntar dados e imprimir mensagem: 

console.log('\n' + 'Day 02 - INÍCIO: ');

var nome = prompt('Qual o seu nome?  ');
var idade = prompt('Quantos anos você tem?  ');
var linguagem = prompt('Qual linguagem de programaçaõ você está estudando?  ');

console.log('Entendi. Então você se chama ' + nome + ', tem '+ idade +' anos e já está aprendendo '+ linguagem +'. Massa!' + '\n');

//EXTRA: 
//Perguntar se gosta de estudar a linguagem respondida e dar resposta de acordo com 2 opções: 

var perg = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO:  `);

while(!(perg==1 || perg==2)){
    console.log('Utilize 1 ou 2 para resposta. :)' + '\n');
  perg = prompt(`Você gosta de estudar  ${linguagem}?  Responda com o número 1 para SIM ou 2 para NÃO:  `);
}
if(perg == 1){
console.log('Muito bom! Continue estudando e você terá muito sucesso.');
}
else if(perg ==2){
    var pergFim = prompt('Ahh que pena... Já tentou aprender outras linguagens?  ');
    console.log('Não desanime!');
  } 

console.log('Day 02 - FIM'+'\n'+ '\n'); 

//======================================================================================

//Day 03
//Desafio: Jogo de decisões através de input de dados do usuário. 

console.log('\n' + 'Day 03 - INÍCIO: ');

var perg1 = prompt('Você quer seguir para Front-End ou Back-End?, Responda com:  1 - Front-End, 2 - Back-End:  ');
var perg2 = '';
while(!(perg1==1 || perg1==2)){
  console.log('Utilize 1 ou 2 para resposta. :)' + '\n');
perg1 = prompt('Você quer seguir para Front-End ou Back-End?, Responda com:  1 - Front-End, 2 - Back-End:  ');
}
if(perg1==1){
  perg2 = prompt('Quer aprender REACT ou VUE?  ');
}
else if(perg1==2){
  perg2 = prompt('Quer aprender C# ou JAVA?  ');
}

var perg3 = prompt('Pretende seguir atuando em '+ perg2 + '? Ou gostaria de ser FullStack?  ');

var perg4 = prompt('Qual tecnologia que você gostaria de se especializar?  ');
var tecnologias = [];
tecnologias.push(perg4);

var perg5 = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Responda 1 - SIM, 2 - NÃO:  ');
while(!(perg5==1 || perg5==2)){
  console.log('Utilize 1 ou 2 para resposta. :)' + '\n');
perg5 = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Responda 1 - SIM, 2 - NÃO:  ');
}
if(perg5==1){
  var perg6 = prompt('Qual?  ');
  tecnologias.push(perg6)
  perg5 = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Responda 1 - SIM, 2 - NÃO:  ');
  while(perg5 == 1){
    var perg6 = prompt('Qual?  ');
    tecnologias.push(perg6);
    perg5 = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Responda 1 - SIM, 2 - NÃO:  ');
  }
  console.log('Legal. Boa sorte com os estudos em '+ tecnologias + '.'); 
}
else if(perg5==2){
 console.log('Legal. Boa sorte com os estudos em '+ tecnologias + '.'); 
}

console.log('Day 03 - FIM'+'\n'+ '\n'); 


//================================================================================================

//Day 04
//Desafio: Jogo de adivinhação. 

console.log('\n' + 'Day 04 - INÍCIO: ');

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

var num = random(0,11);

var chute = prompt('Qual valor de 0 a 10 você chuta que o PC escolheu?  ');
for (let i=0; i<2; i++) {
  if(chute == num){
    console.log("Parabéns, você acertou. Talvez queira considerar jogar esse número na MegaSena.");
    break;
  }
  else if(i==1){
    chute = prompt("Você errou! Última tentativa > Qual valor de 0 a 10 você chuta que o PC escolheu?  ");
    if(chute != num){
      console.log("Errou todas. Está sem sorte dessa vez.");
    }
  }
  else {
    chute = prompt("Você errou! Nova tentativa > Qual valor de 0 a 10 você chuta que o PC escolheu?  ");
  }
}
console.log('\n'+`O número escolhido pelo PC foi: ${num}.`); 
console.log('\n'+'Até a próxima!')

console.log('Day 04 - FIM'+'\n'+ '\n'); 

//=====================================================================================================

//Day 05
//Desafio: 

console.log('\n' + 'Day 05 - INÍCIO: ');



