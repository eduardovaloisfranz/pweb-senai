
const jogarMoeda = function(){
    return new Promise((resolve, reject) => {        
       setTimeout(_ =>{
        let jogada = Math.floor(Math.random() * 2)
            if(jogada == 0){
                resolve('Cara!')
            }else{
                reject('Coroa!')
            }
       }, 5001)
    })
}


let jogadaDaMoeda = jogarMoeda().then(res => console.log(res)).catch(res => console.log(res));