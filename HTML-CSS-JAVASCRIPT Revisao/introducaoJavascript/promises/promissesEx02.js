const contador = function(){
    return new Promise((resolve, request) => {        
        let counter = 0;
        let interval = setInterval(() => {            
            counter++;
            console.log(counter);
            if(counter >= 10){
                clearInterval(interval)                
            }
        }, 1000)
        
    })
}

let contando = contador().then();