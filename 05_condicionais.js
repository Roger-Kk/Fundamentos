console.log(`Trabalhando com condicionais`);

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log(`Destinos possíveis: `);
console.log(listaDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDestinos.splice(1, 1); //removendo item
// } else if (estaAcompanhada == true) {
//     console.log("Comprador está acompanhado");
// } else {
//     console.log("Não é maior de idade, não vender.");
// }

 if (idadeComprador >= 18 || estaAcompanhada == true) {
     console.log("Boa viagem!");
     listaDestinos.splice(2, 1); //removendo item
 } else {
     console.log("Não é maior de idade, não vender.");
 }

 console.log("Embarque: \n\n")
 if (idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem!");
 } else {
    console.log ("Você não pode embarcar.")
 }

console.log(listaDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);












