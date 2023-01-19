// Exemplo: calcular a média das 3 salas:

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

//Método reduce() retorna todos os valores de um array em um só... seja lá o que isso significa...
//reduce() recebe dois parametros: o acumulador e o atual
function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce(
       // (acum, atual) => atual + acum, 0)
        (acum, atual) => acum + atual, 0)
//(param reduce) função seta recebe o acumulado + atual, sendo inicio atual = 0
        return somaDasNotas/notasDaSala.length
}

console.log(`Média da sala de JavaScript: ${mediaSala(salaJS)}`)
console.log(`Média da sala de Java: ${mediaSala(salaJava)}`);
console.log(`Média da sala de Python: ${mediaSala(salaPython)}`);



// Usando reduce para calcular uma media

const notas = [10, 6.5, 8, 7]

const media = notas.reduce((acum, atual) => atual + acum, 0) / notas.length
console.log(media); 


// Outro exemplo usando reduce();
// Com arrow function:
const numeros = [43, 50, 65, 12]
const soma = numeros.reduce((acum, atual) => atual + acum, 0)
console.log(soma); 

//Com função normal: 
const soma1 = numeros.reduce(function(acum, atual){
        return atual + acum
}, 0)
console.log(soma1); 

//Com função callback fora do reduce(): 
function operacaoNumerica(acum, atual){
        return atual + acum
}
const soma2 = numeros.reduce(operacaoNumerica, 0); 
console.log(soma2); 

//O reduce() roda o loop no array “por baixo dos panos”,
// executando para cada elemento a instrução passada na função operacaoNumerica.






