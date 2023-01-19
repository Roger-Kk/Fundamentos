//tipos números

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero * segundoNumero;

console.log(operacaoMatematica);

//ponto flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao);

//NaN -> Not a Number

const alura = "Alura";
console.log (alura*primeiroNumero);


//tipos Strings

const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senha = 'senhaSuperSegura456!';
const StringDeNumeros = "34567";

const citacao = '\nO Leo disse "oi"!';
console.log(citacao);

const citacao2 = "O Leo disse 'oi'!";
console.log(citacao2);

//concatenação (+)

const citacao3 = "Meu nome é";
const meuNome = " Roger";
console.log(citacao3 + meuNome);

// Os caracteres '\u' são caracteres de escape 
// que servem para sinalizar ao JavaScript de que 
//estamos falando de códigos Unicode, e não de 
//strings de texto usuais.

const tique = '\u2705';
const hiragana = '\u3041';
const aMaiusculo = '\u0041';

console.log(tique);
console.log(hiragana);
console.log(aMaiusculo);

//JavaScript é Case Sensitive
const cidade = "belo horizonte";
const input = "Belo Horizonte";
console.log(cidade === input); // false

//Método toLowerCase() transforma o conteudo da 
//variável em minuculo
const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

//propriedade .length conta os caracteres
const senha2 = "minhaSenha123"
console.log(senha2.length) // 13 caracteres


// tipo Booleano

const num1 = 5;
const num2 = 10;
let cadastroAtivado = true;

console.log(num1 === num2);

const texto3 = "Alura";
const texto4 = "alura";
console.log (texto3 === texto4);

// Tipo Null

let input1 = null; //Váriavel com ausencia de valor: null

if (input1 === null) {
 console.log('não há informação');
} else {
 console.log(input3);
}

let input2; //Váriável sem atribuição de valor: undefined

console.log(input1); // null
console.log(input2); // undefined

console.log(null == undefined); // true
console.log(null === undefined); // false