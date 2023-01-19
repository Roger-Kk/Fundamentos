console.log(`Trabalhando com vírgulas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`, 
    `Rio de Janeiro`,
);

listaDestinos.push(`Curitiba`); //Adiciona item na lista
console.log(`Destinos possíveis: `);
// console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDestinos);

listaDestinos.splice(1, 1);
console.log(listaDestinos);

console.log(listaDestinos[1]);
console.log(listaDestinos[1], listaDestinos[0]);



