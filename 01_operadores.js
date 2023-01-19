//Operadores de comparação

// == (comparação implícita)

const numero = 5;
const texto = '5';

console.log(numero == texto);
//compara o valor das variaveis

console.log(numero === texto);
//compara o valor e o tipo das variaveis

//typeof
console.log(typeof numero);
console.log(typeof texto);

// conversão explícita

Number();
String();


//operador ternário
const idadeMinima = 18;
const idadeCliente = 16;

// if(idadeCliente >= idadeMinima){
//     console.log("cerveja");
// }else{
//     console.log("suco");
// }
            // condição                    //true    //false
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco");


// Operador de adição/concatenação

const nome = "Roger";
const idade = 2022-1986;
const cidadeNascimento = "Curitiba";

const apresentacao = "Meu nome é " + nome; 
console.log(apresentacao);

const apresentacao2 = "Meu nome é " + nome + 
", minha idade é " + idade + " e nasci em " + cidadeNascimento + ".";
console.log(apresentacao2);


// Usando template string
const apresentacao3 = "Meu nome é xxx, minha idade é xxx e nasci na cidade de xxx."
console.log(apresentacao3);

const apresentacao4 = `Meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeNascimento}.`;
console.log(apresentacao4);




