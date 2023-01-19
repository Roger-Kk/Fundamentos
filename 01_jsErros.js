// O que é a linguagem JavaScript?
// É de tipagem dinâmica

let minhaVar = 567;
minhaVar = "texto";
minhaVar = true;

//É multiparadigma
// linguagem que aceita paradigmas diferentes da 
// programação. Ex: linguagem funcional (sequência de 
// funções executadas) e linguagem orientada a objetos 
// (códigos agrupados em objetos que interagem entre si). 


//É uma linguagem interpretada
//linguagem que é executada através de um interpretador, 
//como o navegador, o node.js por exemplo. 
// Diferente de uma linguagem compilada, que necessita de 
// um compilador para "traduzir" a codificação para que o 
// computador leia e execute o código. 


//Erros

// const numero
// SyntaxError: Missing initializer in const declaration

// console.log(numero; 
// SyntaxError: missing ) after argument list

// onst numero = 1;
// SyntaxError: Unexpected identifier

// console.log(minhaVariavel);
// ReferenceError: minhaVariavel is not defined


//Entendendo o erro

// Tipo: ReferenceError: minhaVariavel is not defined
// Caminho:   at Object.<anonymous> (D:\Users\Roger\Área de Trabalho\Estudos Programação\ALURA\Java Script\ConceitosBásicos\3-JavaScript_eErros.js:34:13)
// Stack Trace:
//     at Module._compile (node:internal/modules/cjs/loader:1105:14)    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
//     at Module.load (node:internal/modules/cjs/loader:981:32)     
//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
//     at node:internal/main/run_main_module:17:47


//console.log() o que é
//Envia dados para fora da aplicação

//.log -> registro
const variavel = true;
console.log(245);
console.log("texto");
console.log(variavel);

//Tratamento de erro

console.error('Deu erro!');

console.log("deu erro");
console.error("deu erro");

console.log("deu erro");
console.error(new Error("deu erro"));



