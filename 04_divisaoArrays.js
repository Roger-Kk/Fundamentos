
//Método .slice
const nomes = ['Ana', 'Bia', 'Carla', 'Debora'];

console.log(`Tamanho da array: ${nomes.length}`);
const sala1 = nomes.slice(0,nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);

console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Alunos da sala 2: ${sala2}`);


//Método .splice
               //0      //1       //2       //3         //4     
const lista = ['João', 'Maria', 'Fulano', 'Ciclano', 'Beltrano'];

lista.splice(1,2, 'Rodrigo');
console.log(`Lista de chamada: ${lista}`);

lista.splice(1,0,'George');
console.log(`Lista de chamada: ${lista}`);


//Método .concat

const salaPython = ['Melissa', 'Helena', 'Roger'];
const salaJS = ['Rafa', 'Ju', 'Leo'];

const salasJuntas = salaPython.concat(salaJS);
console.log(salasJuntas);





