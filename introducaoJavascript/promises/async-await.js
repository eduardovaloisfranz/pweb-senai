/* 
    fazer arroz    
    1- lava
    2- refoga
    3- cozinha    
*/


let  arrozVelho = false;

let lavar = (arrozIsVelho) => {
    return new Promise((resolve, reject) => {
        console.log("Lavando o arroz") 
        setTimeout(_ => {
            if(!arrozIsVelho){
                resolve("Arroz esta bom e lavado indo refogar")
            }else{
                reject("arroz velho compre outro")
            }
        }, 3000)
    })
}

let refogar = _ => {
    return new Promise((resolve, reject) => {
        console.log("Refogando o arroz")
        setTimeout(_ => {
            console.log("Arroz refogado")
        }, 3000)
    })
}

// let cozinhar = lavar(false).then(res => {
//     console.log(res)
//     return refogar();
// }).then(res => {
//     console.log(res => {
//         console.log(res)
//     })
// }).catch(res => {
//     console.log(res)
// })


let prepararAlmoco = async (arrozIsVelho) => {
    await lavar(arrozIsVelho)
    await refogar()
    return 'Almoco pronto'
}


let almoco = prepararAlmoco(false).then(res => {
    console.log(res)
}).catch(res => {
    console.log(res)
})