

const sumLargestNumbers = function(data) {
    // Put your solution here
    let newarr = []
    newarr = data.sort((a, b) => a - b).slice(-2)
    return newarr.reduce((a,b)=>a+b)
    // let total=0
    // for(let i=0; i<newarr.length; i++){
    //     total+=newarr[i]
    // }
    // return total
};

console.log(sumLargestNumbers([5,15,10,30,12]))

