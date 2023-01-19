//Exemplo 11: Criar uma função que gera novos clientes a partir de um modelo

function Cliente(nome, cpf, email, saldo){
    this.nome = nome,
    this.cpf = cpf,
    this.email = email,
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

//A palavra reservada 'new' refere-se a criação de uma nova instância de objeto
//a partir de uma função

const andre = new Cliente('André', '65498163438', 'andre@email.com', 100)
console.log(andre); 




//Exemplo 12: Aproveitar um cliente existente, e criar um novo a partir dele:
//Método call() chama as propriedades e comportamentos da função Cliente();
//Como parâmetro, indica quais parametros que quero chamar do cliente.
function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const ju = new ClientePoupanca('Ju', '357486468464', 'ju@email.com', 200, 300);
console.log(ju); 

//'prototype' é a propriedade que o JavaScript cria para todo objeto/função
//ao digitar .prototype estamos acessando a propriedade e no exemplo incluindo
//no protótipo a função 'depositarPoup'.
ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

ju.depositarPoup(50);
console.log(ju.saldoPoup);
console.log('\n');

//Verificando saídas do console para as seguintes propriedades: 
console.log(andre.hasOwnProperty("saldoPoup"))
console.log(ju.hasOwnProperty("saldoPoup"))
console.log(andre instanceof Cliente)
console.log(typeof andre)
console.log(typeof ju)
console.log(ju instanceof ClientePoupanca)
console.log(Function.prototype.isPrototypeOf(Cliente))
console.log(Cliente.constructor === Function)



