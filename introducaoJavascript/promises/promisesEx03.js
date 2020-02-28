let cartao;
const inserirCartao = function(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cartao = "VISA";
            resolve('Cartao adicionado, indo validar o login')
        }, 2000)
    })
}

let user = "admin"
let password = "admin";

const validarLogin = function(){
    return new Promise((resolve, reject) => {
        if(user == "admin" && password == "admin"){
            resolve("Usuario logado, indo receber o valor e validar o saque")
        }else {
            reject("Usuario nao logado")
        }
    })
}

const receberNotasSaques = function() {
    return new Promise((resolve, reject) => {
        
    })
}


let rotinaUsuario = inserirCartao().then(res => { 
    console.log(res)
    return validarLogin()
}).then(res => {
    console.log(res)
})