/**
 * aninhamento de promisses
 * 
 * acordar
 * escova dentes
 * tomar café
 * troca de roupa
 * vai
 */

let sono = false 
const acordar = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!sono) {
                resolve('Bora levantar!! 🙂 vou escovar os dentes')  
            } else {
                reject('Hoje não vou trabalhar.. 😴')  
            }
        }, 3000)
    })
}

const escovarDente = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Terminei de escovar os dentes 😶. vou tomar café')  
        }, 2000)
    })
}

const tomarCafe = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Tomei café 😕. vou trocar de roupa')   
        }, 2000)
    })
}

const irTrablhar = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Troquei de roupa 😢. vou trabalhar') 
        }, 2000)
    })
}

let trabalhar = acordar().
    then(res => {
        console.log(res)
        return escovarDente()
    }).
    catch(res => console.log(res)).
    then(res => {
        console.log(res)
        return tomarCafe()
    }).then(res => {
        console.log(res)
        return irTrablhar()
    }).then(res => console.log(res))