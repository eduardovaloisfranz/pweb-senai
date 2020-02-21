const arr = [1, 2, 3, 4, 5]

console.log(arr);

const adicaoArray = arr => {
    arr.map(item => item + 10)    
}

adicaoArray(arr);
console.log(arr)