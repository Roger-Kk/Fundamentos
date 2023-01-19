//Array de duas dimensões]

const alunos = ['João', 'Juliano', 'Caio', 'Laura'];

const mediaAlunos = [10, 7, 9, 8];

let listaNotasAlunos = [alunos, mediaAlunos];
console.log(`${listaNotasAlunos[0][0]} sua media é: ${listaNotasAlunos[1][0]}`);


//Procurando um dado numa lista:

const exibeNomeNota = (nomeDoAluno) => {
    if(listaNotasAlunos[0].includes(nomeDoAluno)){
        let indice = listaNotasAlunos[0].indexOf(nomeDoAluno)
        return listaNotasAlunos[0][indice] + ' , sua media é ' + listaNotasAlunos[1][indice];
    }else {
        return "Aluno não esta cadastrado."
    }
}

console.log(exibeNomeNota("Juliano"));

//método "includes" retorna booleano
//método "indexOf" retorna o número do índice





