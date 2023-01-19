//Ordenação
//Exemplo: Livros de menor valor primeiro
//                    0
const precosLivros = [25, 15, 30, 50, 45, 20];

let maisBarato = 0; //Posição no array
for (let atual = 0; atual < precosLivros.length; atual ++){
    if(precosLivros[atual] < precosLivros[maisBarato]){
        maisBarato = atual;
    }
}
console.log(`O livro mais barato custa ${precosLivros[maisBarato]}`);

// Exemplo 2: 

const precosLivrosObj = [
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

//exporta a variável precosLivreosObj
module.exports = precosLivrosObj;

//importa a variável precosLivrosObj
//const livros = require('./precosLivrosObj');
const livros = precosLivrosObj;

let maisBarato2 = 0; //Posição no array
    for (let atual = 0; atual < livros.length; atual ++){
        if(livros[atual].preco < livros[maisBarato2].preco){
            maisBarato2 = atual;
        }
    }
console.log(`O livro mais barato custa ${livros[maisBarato2].preco} e o título é ${livros[maisBarato2].titulo}`);


//Definindo uma função genérica para usar: 

function menorValor(arrProd, posicaoInicial){
    let maisBarato3 = posicaoInicial; //Posição no array
        for (let atual = 0; atual < arrProd.length; atual ++){
            if(arrProd[atual].preco < arrProd[maisBarato3].preco){
                maisBarato3 = atual;
            }
        }
    return maisBarato3;
    }
    
    module.exports = menorValor;































