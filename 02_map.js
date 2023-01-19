// método map()

let nomes = ["ana", "Caio Susse", "BIA silva"];

const nomesAtualizados = nomes.map(nome => nome.toUpperCase());
console.log(nomesAtualizados);



//Declarando uma função callback pra chamar (call)
//quando executar o método map()

const arrayNums = [1, 2, 3, 4]

function multiplicaPorDez(num){
    return num * 10
}

const arraySomada = arrayNums.map(multiplicaPorDez);
console.log(arraySomada);






