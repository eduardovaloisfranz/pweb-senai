// busca email
let buscouEmail = false;

//criando promisse
const buscaEmail = function(){
    return new Promise((resolve, reject) =>{
        //rotina busca email
        setTimeout(() => {
            if(buscouEmail){
                resolve('Emails retornados com sucesso')
            }else {
                //reject(Error('Ocorreu um erro ao Buscar os Emails'))
                reject('Ocorreu um erro ao Buscar os Emails')
            }
        }, 5000)
    })
}

//uso de uma promisse

let emailsRetornados = buscaEmail().then(ret => console.log(ret)).catch(ret => console.log(ret))

console.log("a rotina não para ...")