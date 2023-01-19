
// Introdução a objetos Javascript

const listaCPFs = ['12313131313', '6546815313', '6541681344'];


// declaração de um objeto
const cliente = {
    nome: 'André', 
    idade: 36, 
    cpf: '3213543151',
    email: 'andcre@email.com'
}



//Exemplo 1 : Acessar objetos e printar informações de um objeto no console:
//usando "notação de ponto objeto.propriedade"
console.log(cliente.nome); 
console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`);

console.log(cliente.cpf.substring(0,3));
console.log('\n'); 


//Exemplo 2: Consultar um objeto acessando uma lista de chaves
//usando "notação de array"
const chaves = ['nome', 'idade', 'cpf', 'email']
console.log(cliente[chaves[0]]); 
console.log(cliente['nome']); //quando se sabe o nome da variável, porém incomum

//Não da pra acessar uma variável com a notação de ponto. EX: 
// let chave = 'nome';
// console.log(cliente.chave) -> Não funciona
// console.log(cliente[chave]) -> Funciona

// Percorrer um objeto e printar as informações: 

chaves.forEach(info=>console.log(cliente[info]));

console.log(chaves.conta); 
console.log('\n'); 


//Exemplo 3: Adicionando campos no objeto
console.log(cliente);
cliente.fone = '41988887777'
console.log(cliente);

cliente.fone = '218455100000'
console.log(cliente); 

//deletar uma propriedade:
delete cliente.fone;
console.log(cliente); 
console.log('\n'); 



//Exemplo 4: Adicionando mais de um telefone

cliente.fones = ['419855554444', '32001122']
console.log(cliente); 

//Acessando somente os telefones com o forEach()
cliente.fones.forEach(fone => console.log(fone)); 



//Exemplo 5: Adicionar dependentes para um dos clientes cadastrados, com nome, idade e parentesco

cliente.dependentes = {
    nome: 'Sarah',
    idade: '05',
    parentesco: 'filha',
}

console.log(cliente); 


cliente.dependentes.nome = 'Sarah Miller';
console.log(cliente); 



//Exemplo 6: melhor forma de agregar um dependente no objeto cliente
// Transformando a propriedade 'dependentes' em array:
cliente.dependentes = [{
    nome: 'Sara Miller', 
    idade: 05, 
    parentesco: 'filha'
}]; 

cliente.dependentes.push({
    nome: 'Samela Miller', 
    idade: 01,
    parentesco: 'filha'
});

console.log(cliente); 

const filhaMaisNova = cliente.dependentes.filter(a => a.idade === 01); 
console.log(filhaMaisNova); 

//Acessando só o nome da filha mais nova: 

console.log(filhaMaisNova[0].nome); 
console.log('\n');



//Exemplo 7: Adicionando uma ação no objeto do cliente
console.log(cliente); 

cliente.saldo = 100;
//A palavra reservada "this" refere-se a própria instância de objeto
cliente.depositar = function(valor){
    this.saldo += valor
};

console.log(cliente); 

console.log(cliente.saldo);
cliente.depositar(30);
console.log(cliente.saldo); 







