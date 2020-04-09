class Cliente {
    constructor(nome){
        this.nome = nome
    }
}

class ContaCorrente {
    constructor(saldo, nomeCliente){
        this.saldo = saldo;
        this.nomeCliente = nomeCliente;
        this.Cliente = new Cliente(nomeCliente);
        
    }
    depositar(valor) {        
        this.saldo += valor;
    }
    sacar(valor){
        if(this.saldo > valor){
            this.saldo -= valor;
        }else{
            console.log("Saldo Insuficiente!")
        }
        
    } 
    transferir(ContaCorrente, valor){
        if(this.saldo > valor){
            ContaCorrente.depositar(valor);
            this.sacar(valor);
        }
        

    }
    toString() {
        return `Cliente: ${this.Cliente.nome},
        Saldo disponível: ${this.saldo}`
    }

}

class ContaEspecial extends ContaCorrente{
    constructor(saldo, nomeCliente, limite){
        super(saldo, nomeCliente)
        this.limite = limite;
    }
    sacar(valor){
        if((this.saldo + this.limite) > valor){
            
            this.saldo -= valor;
            //return true;          
            //console.log(super.saldo);
        }else if((this.saldo + this.limite) < valor){
            console.log("Limite superior")
        }  
       
     

    }  
}

//let c1 = new Cliente("Eu")
let ContaCorrente1 = new ContaCorrente(1000, "eu");
let ContaCorrente2 = new ContaCorrente(2000, "eu2");

console.log(ContaCorrente1.toString());
console.log(ContaCorrente2.toString());



ContaCorrente1.transferir(ContaCorrente2, 100);


console.log(ContaCorrente1.toString());
console.log(ContaCorrente2.toString());



let ContaCorrente3 = new ContaEspecial(1000, "eu3", 100)


//console.log(ContaCorrente1.saldo)
ContaCorrente1.sacar(100);
//console.log(ContaCorrente1.saldo)

ContaCorrente3.sacar(3001)
console.log(ContaCorrente3.saldo)


console.log(ContaCorrente3.toString())
console.log(ContaCorrente2.toString())







