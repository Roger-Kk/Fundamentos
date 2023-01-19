//Algoritmo de ordenação "Insertion Sort"

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

function insertionSort(lista){

    for (let atual = 0; atual < lista.length; atual++){
        let analise = atual;
        while (analise > 0 && lista[analise].preco < lista[analise -1].preco){
            let itemAnalise = lista[analise] //Guarda o objeto lista[analise] numa variavel
            let itemAnterior = lista[analise -1] // Guarda o objeto lista[analise -1] numa variavel
            
            lista[analise] = itemAnterior;
            lista[analise -1] = itemAnalise;

            analise --
        }
    }
    console.log(lista); 
}
insertionSort(livros); 





































