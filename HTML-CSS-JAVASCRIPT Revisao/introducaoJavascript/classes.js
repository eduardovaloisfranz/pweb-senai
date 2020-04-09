class Pessoa {
    //private string nome    
    constructor(nome, idade){
        //atributos no construtor
        this.nome = nome;
        this.idade = idade;
    }

    apresentacao(){
        var email = "a@.com"
        return `Ola, me chamo ${this.nome}, tenho, 
        tenho ${this.idade} anos\ meu email é ${email}`
    }

    static digaOi() {
       return "oi"
    }
    

    getEmail() {
        return email;
    }
}

class PessoaFisica extends Pessoa {
    constructor(nome, idade, cpf){
        super(nome, idade);
        this.cpf = cpf;
    }

    apresentacao() {
        console.log(super.apresentacao())
        console.log(`cpf é: ${this.cpf}`)
    }
}


let eu = new PessoaFisica("Eu", "20", "101.189,169-71")
console.log(eu.apresentacao())
console.log(Pessoa.digaOi())