/**
 * aninhamento de promisses
 * 
 * acordar
 * escova dentes
 * tomar café
 * troca de roupa
 * vai
 */

const acordar = (sono) => {
    return new Promise((resolve, reject) => {
        setTimeout(_ => {
            if(!sono){                
                resolve("Acordado, indo escovar os dentes")
            }else{
                reject("Vou continuar dormindo")
            }
        }, 2000)
    })
}

const escovarDentes = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(_ => {
            resolve("Escovando os dentes, depois ir tomar café")
        }, 1500)
    })
}

const tomarCafe = _ =>{
    return new Promise((resolve, reject) => {
        setTimeout(_ => {
            resolve("Tomando café, depois trocar de roupa")
        }, 2000)
    })
}

const trocarRoupa = _=> {
    return new Promise((resolve, reject) => {
        setTimeout(_ => {
            resolve("Trocando de roupa, indo trabalhar")
        }, 3000)
    })
}

const goWork =_=> {
    return new Promise((resolve, reject) => {
        setTimeout(_=> {
            resolve("Indo pro trabalho")
        }, 1000)
    })
}

let irTrabalhar = acordar(false).then(res => {
    console.log(res)
    return escovarDentes()
}).catch(res => {
    console.log(res)
}).then(res => {
    console.log(res)
    return tomarCafe()
}).then(res => {
    console.log(res)
    return trocarRoupa()
}).then(res => {
    console.log(res)
    return goWork()
}).then(res => {
    console.log(res)
})

//console.log(acordar(true))