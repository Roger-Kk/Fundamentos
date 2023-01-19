//For

const numeros = [100, 200, 300, 400, 500, 600];

for(let i = 0; i < numeros.length; i++){
    console.log(i, numeros[i]);
}

console.log('\n');



//Calculando média de notas:

const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0;
for (i = 0; i < notas.length; i++){
    somaDasNotas += notas[i];
}

let media = somaDasNotas/notas.length;
 
console.log(` A média das notas é: ${media}.`);
console.log('\n');



//Media utilizando o forEach(); 

const notas2 = [10, 6.5, 8, 7.5]
let somaDasNotas2 = 0;

//Callback
notas2.forEach(notas2 =>{
    somaDasNotas2 += notas2;
})

//Poderia ser escrito: 
// notas2.forEach(function(notas2){
//     somaDasNotas2 += notas2;
// })

let media2 = somaDasNotas2/notas2.length;

console.log(`A média das notas2 é: ${media2}.`);


//Exemplo: Alunos reprovados
//Método filter();

const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const notaAluno = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((aluno, indice) => 
notaAluno[indice] < 5 )

console.log(`Alunos reprovados: ${reprovados}`)






