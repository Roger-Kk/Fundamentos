
// Classes
// Define os atributos (características) e os métodos (comportamentos) de um objeto.

class Pessoa{
    constructor(nome, sobrenome, cpf, email){
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.cpf = cpf,
        this.email = email
    }
    exibirNomeCompleto(){
        console.log(`${this.nome} ${this.sobrenome}`)
    }
}

//Herança
// 'extends' significa que uma outra classe herda as caracteristicas de outra classe
// 'super' chama o construtor da classe pessoa para dentro  da classe Programador
class Programador extends Pessoa{
    constructor(nome, sobrenome, cpf, email, linguagem){
        super(nome,sobrenome, cpf, email)
        this.linguagem = linguagem
    }
}

// Objeto é uma instância de uma classe
const novoDev = new Programador("André", "Silva", '354348341',"andre@email.com", "Javascript")


//|Ex:
class Cliente{
    constructor (nome, email, cpf, saldo){
        this.nome = nome,
        this.email = email, 
        this.cpf = cpf,
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor;
    }
    exibirSaldo(){
        console.log(`Saldo: R$${this.saldo}`);
    }
}

const bruno = new Cliente("Bruno", "bruno@email.com", "354634684654", 1000);
console.log(bruno);
bruno.exibirSaldo();
console.log('\n');


//Exemplo 12:
//Aproveitar um cliente já existente, e criar uma classe para ClientePoupança

class ClientePoup extends Cliente {
    constructor (nome, email, cpf, saldo, saldoPoup){
        super(nome, cpf, email, saldo)
        this.saldoPoup = saldoPoup
    }
    depositarPoup(valor){
        this.saldoPoup += valor;
    }
    exibirSaldoPoup(){
        console.log(this.saldoPoup);
    }
}

const caio = new ClientePoup("Caio","caio@email.com","65468465421",100,500);
caio.exibirSaldoPoup();

caio.depositar(50);
caio.depositarPoup(50);
caio.exibirSaldo();
caio.exibirSaldoPoup(); 



