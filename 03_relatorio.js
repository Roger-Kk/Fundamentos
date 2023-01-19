//Exemplo 8 Objetos: Imprimir relatório

const cliente = {
    nome: 'André', 
    idade: 36, 
    cpf: '3213543151',
    email: 'andcre@email.com',
    fones: ['64654654694', '6465465464'],
    dependentes: [
        {
            nome: 'Sara Pova', 
            grau: 'filha',
            dataNasc: '01/01/2014'
        },
        {
            nome: 'Joana Inha', 
            grau: 'filha',
            dataNasc: '01/01/2008'
        }
    ],
    saldo: 100,
    depositar: function (valor){
    this.saldo += valor;
    }      
}

let relatorio = '';

for (let info in cliente){
    if(typeof cliente[info] === 'object' || typeof cliente[info] === 'function'){
        continue
    } else {
        relatorio += `
        ${info} : ${cliente[info]}
        `;
    }
}
// console.log(typeof cliente.depositar); 
console.log(relatorio); 



//Exemplo 9 Objetos: Percorrer um objeto e, se tiver dependente, oferecer seguro:

//Método Object.keys()
const propsClientes = Object.keys(cliente);
console.log(propsClientes); 

//Método de array .includes() retorna true ou false se encontrar num objeto o argumento
function oferecerSeguro (obj) {
    const propsCliente = Object.keys(obj);
    if(propsCliente.includes('dependentes')){
        console.log(`Oferta de seguro de vida para ${obj.nome}.`);
    }
}

oferecerSeguro(cliente); 

//Método Object.values() verifica se tem valores:
console.log(Object.values(cliente));

//Método Object.entries() retorna 'chave' e 'valor':
console.log(Object.entries(cliente));



//Exemplo 10 Objetos - Extrair dados de dependentes do objeto para disponibilizar
// para outros bancos

const clientes = [
    {
    nome: 'André', 
    idade: 36, 
    cpf: '3213543151',
    email: 'andcre@email.com',
    fones: ['64654654694', '6465465464'],
    dependentes: [
        {
            nome: 'Sara Pova', 
            grau: 'filha',
            dataNasc: '01/01/2014'
        },
        {
            nome: 'Joana Inha', 
            grau: 'filha',
            dataNasc: '01/01/2008'
        }
    ]},
    {
        nome: "Juliana",
        idade: 28,
        cpf: "654654655454",
        dependentes: [
            {
            nome: "Sofia",
            grau: "filha",
            dataNasc: "30/08/2020"
        }],
    }
]
//Operador de espalhamento (spread operator) '...' retira uma propriedade de um 
//objeto e junta num array
const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]
console.log(listaDependentes);

//console.table lista em tabela: 
console.table(listaDependentes); 

for (let info in clientes){
    if (clientes.info == 'dependentes'){
        dep += [...clientes.info];
    }   
}
console.log(dep);