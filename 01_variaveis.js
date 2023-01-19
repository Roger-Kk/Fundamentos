// var

//  var altura = 5;
//  var comprimento = 7;

//  area = altura * comprimento;
// console.log(area);
// var area;


// let forma = 'retângulo'
// let altura = 5;
// let comprimento = 7;

// let area;
// if(forma === 'retângulo'){
//     area = altura * comprimento;
// }else {
//     area = (altura * comprimento)/2;
// }
// console.log(area);

const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area;

if(forma === 'quadrado'){
    area = altura * comprimento;
}else{
    area = (altura * comprimento)/ 2;
}

console.log(area);

//boolean

const usuarioLogado = true;
const contapaga = false;

// truthy ou falsy

// 0 -> false
// 1 -> true

console.log(0 == false);
console.log("" == false);
console.log(1 == true);

//null -> Vazio

let minhaVar;
let varNull = null;

console.log(minhaVar);
console.log(varNull);

//undefined

let numero = 3;
let texto = "Alura";

console.log(typeof numero);
console.log(typeof texto);
console.log(typeof minhaVar);
console.log(typeof varNull);


// conversões

//conversão implícita
const num = 456;
const numString = "456";

console.log(num == numString);
console.log(num + numString);

//conversão explícita

//Number()
//String()

console.log(num + Number(numString));
