//Para rodar os desafios, utilize o terminal do Visual Studio com o Node.js através do comando node 'nomeDoArquivo.js'
//Day 01
/*
Desafio para comparar variáveis bem fácil. 
*/

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
/*OBS: para executar comando prompt() de input de dados em node.js use o comando "npm install prompt-sync"

Perguntar dados: 
- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

E imprimir mensagem com os dados.  
*/
console.log('\n' + 'Day 02 - INÍCIO: ');

var prompt = require('prompt-sync');
var prompt = prompt();

var nome = prompt('Qual o seu nome?');
var idade = prompt('Quantos anos você tem? Hein?');
var linguagem = prompt('Qual linguagem de programaçaõ você está estudando?');

console.log('Olá ' + nome + ', você tem '+ idade +' anos e já está aprendendo '+ linguagem +'!');

//EXTRA: 
/*
Perguntar: 
Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.
E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:
1 > Muito bom! Continue estudando e você terá muito sucesso.
2 > Ahh que pena... Já tentou aprender outras linguagens?
*/

var perg = prompt('Você gosta de estudar ' + linguagem  + '?  Responda com o número 1 para SIM ou 2 para NÃO' + '\n');

if(perg == 1){
console.log('Muito bom! Continue estudando e você terá muito sucesso.');
}
if(perg ==2){
    var pergFim = prompt('Ahh que pena... Já tentou aprender outras linguagens?');
    console.log('Que tanso!' + '\n');
  } 
else {
  console.log('Tem que responder 1 ou 2... ¬¬');
}

console.log('Day 02 - FIM'+'\n'+ '\n'); 

//======================================================================================

//Day 03
/*
Jogo de decisões através de input de dados do usuário. 
*/


