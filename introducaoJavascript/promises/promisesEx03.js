
const inserirCartao = function(cartao){
    return new Promise((resolve, reject) => {
        setTimeout(() => {            
            if(cartao == "VISA"){
                resolve('Cartao adicionado, indo validar o login')
            }else {
                reject("Cartao INVALIDO")
            }            
        }, 2000)
    })
}

//let user = "admin"
//let password = "admin";

const validarLogin = function(user, password){
    return new Promise((resolve, reject) => {
        setTimeout(_ => {
            if(user == "admin" && password == "admin"){
                resolve("Usuario logado, indo receber o valor e validar o saque")
            }else {
                reject("Usuario nao logado")
            }
        }, 2000)
      
    })
}

let saldo = 1000;

const receberNotasSaque = function(valor) {
    return new Promise((resolve, reject) => {
        setTimeout(_=>{
            if(valor > saldo){
                reject("Valor maioor que o saldo, não pode efetuar o saque")
            }else{
                resolve(["É possivel efetuar o saque, indo debitar o valor da conta e contar notas", valor])
            }
        }, 1000)
    })
}

const contarNotasDebitarValor = (valor) => {
    return new Promise((resolve, reject) => {
        setTimeout(_ => {
            saldo -= valor;
            resolve(`Valor debitado voce agora contém:  ${saldo} isso em notas de 100 é : ${saldo / 100}`)
        }, 1000)
    })
}

let rotinaUsuario = inserirCartao("VISA").then(res => {
    console.log(res)
    return validarLogin("admin", "admin")
}).catch(res => {
    console.log(res)    
}).then(res => {
    console.log(res)    
    return receberNotasSaque(300);
}).catch(res => {
    console.log(res)
}).then(res => {
    console.log(res[0])
    return contarNotasDebitarValor(res[1])
}).catch(res => {
    console.log(res)
}).then(res => {
    console.log(res)
})