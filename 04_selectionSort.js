// importar lista 'precosLivrosObj' OBS: não funcionou...
//const livros = require('./precosLivrosObj');

//então declarei o array novamente:

const livros = [
    {
        titulo: "JavaScript",
        preco: 25
    },
    {
        titulo: "PHP",
        preco: 15
    },
    {
        titulo: "Java",
        preco: 30
    },
    {
        titulo: "Elixir",
        preco: 50
    }, 
    {
        titulo: "Go",
        preco: 45
    }, 
    {
        titulo: "Python",
        preco: 20
    }    
]; 

//importar a função menorValor OBS: não funcionou... 
// const menorValor = require('./menorValor');

//então declarei a função novamente: 

function menorValor(arrProd, posicaoInicial){
let maisBarato3 = posicaoInicial; //Posição no array
    for (let atual = posicaoInicial; atual < arrProd.length; atual ++){
        if(arrProd[atual].preco < arrProd[maisBarato3].preco){
            maisBarato3 = atual;
            }
        }
return maisBarato3;
}

for (let atual = 0; atual < livros.length; atual ++){
    let menor = menorValor(livros, atual) //retorna a posição do livro de menor valor
    
    let livroAtual = livros[atual]; //recebe o objeto livro na posição atual
    console.log('Posição atual: ', atual); 
    console.log('Livro atual: ', livros[atual]);
    let livroMenorPreco = livros[menor]; //recebe o objeto livro na posição menor
    console.log('Livro menor preço: ', livros[menor]); 

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}

console.log(livros); 

















