function twoSum(numbers, target) {
    // ...
    
    let value = numbers[0]
    let index = 0
    
    while (index < numbers.length){
      // loop through numbers
      value = numbers[index]
      for(i=0; i<numbers.length; i++){
          // set current index and value
        if(index !== i){
            if(value + numbers[i] === target) return [index, i]
        }
      }
      index++
    }
    
  }

  console.log(twoSum([2,2,3], 4));