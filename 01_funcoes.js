//Funções

// let x = "";
// console.log(x);
// x = "oi";

// 1)Declaração da função
                    //String
function imprimeTexto(texto){
    console.log(texto);
}

// 2)Execução da função (1 ou + vezes)

imprimeTexto("é noiiiis");
imprimeTexto("outro texto");

imprimeTexto(2+4);
imprimeTexto("" === 0);


//TRÊS FORMAS DE ESCREVER FUNÇÕES

function soma(){
    const resultado = 2 + 2;
}

//Não imprime nada, pois falta a função retornar algo "return"
// console.log(soma());

function soma1(){
    return 2 + 2;
}

console.log(soma1());
imprimeTexto(soma1());
console.log('\n');


//parâmetros de função
                  
function soma2(num1, num2){
    return num1 + num2;
}

console.log(soma2(1,2));
console.log(soma2(10,20));
console.log(soma2(100,200));

// parâmetros X argumentos

//parâmetro: é quando a função é definida
//argumento: é quando atribui-se um valor ao parâmetro,
//ou seja na execução da função. 
//No exemplo abaixo, parâmetro é 'nome' e 'idade'. 
//E argumento é 'Roger', '36'.

// ordem dos parâmetros
function nomeIdade(nome, idade){
    return `Meu nome é ${nome}, e tenho ${idade} anos.`;
}

console.log(nomeIdade('Roger', 36));

//declarando default value para um parâmetro
//num1 e num2 foram declaradas na função e tem como 
//parâmetro o valor 1.
function multiplica(num1 = 1, num2 = 1){
    return num1 * num2;
}
                     //num1 //num2
console.log(multiplica(4,5));
                         //9        //6
console.log(multiplica(soma2(4,5), soma2(3,3)));
                        //9      //default value
console.log(multiplica(soma2(4,5)));
console.log("\n");


//Expressões: São formas de escrever funções

//Função - estrutura da declaração:
function minhaFuncao(param){
    //bloco de código
}
minhaFuncao('param');

//Expressão da função
const soma3 = function(num1, num2){return num1 + num2};
console.log(soma3(1,2));

//diferença principal é o HOISTING (Lista funções e var
// todas antes de executar o código)
console.log(apresentar()); //posso chamar a função antes
                           //e depois declarar ela no código
function apresentar(){
    return  'Olá!';
}

//Na expressão não posso chamar antes e declarar depois:
//console.log(soma4(1,1));
const soma4 = function(num1,num2){return num1 + num2};
//ReferenceError: Cannot access 'soma4' before initialization
console.log('\n');


//Recapitulando as formas de escrever funções:
//Forma clássica 
// function soma5(num1, num2){
//     return num1 + num2;
// }

//Forma com expressão
// const soma5 = function(num1, num2){return num1 + num2};

//Forma Arrow Function
const apresentarArrow = nome => `O nome é ${nome}`;
const soma5 = (num1, num2) => num1 + num2;

console.log(apresentarArrow('Arrow Function'));
console.log(soma5(1,2));

// Arrow function com mais de 1 linha de instrução
const somaNumPequenos = (num1, num2) => {
    if(num1 > 10 || num2 > 10){
        return "Permitido somente soma de 1 a 9."
    } else {
        return num1 + num2;
    }
}
//ATENÇÃO: não confundir a seta ('=>') do arrow function
//com o operador ('maior ou igual a: >=')

//Quando utilizar cada um dos 3 tipos de função?
// Arrow Function usa-se pra deixar o código menor
// Expressão e Arrow possuem Hoisting (Não são listadas)
// Declaração de Função é listada





