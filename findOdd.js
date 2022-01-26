/**
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
**/

function isOdd(num) {
  return num % 2 !== 0;
}

function findOdd(arrOfIntegers) {
  //happy coding!

  let numTrackingObj = {};

  // arrOfIntegers
  // .forEach(function(el){
  //     numTrackingObj[el] ? numTrackingObj[el]++ : numTrackingObj[el] = 1;
  //   });

  for (let i = 0; i < arrOfIntegers.length; i++) {
    if (numTrackingObj[arrOfIntegers[i]] >= 0) {
      numTrackingObj[arrOfIntegers[i]]++;
    } else {
      numTrackingObj[arrOfIntegers[i]] = 1;
    }
  }

  for (const val in numTrackingObj) {
    if (isOdd(numTrackingObj[val])) return val;
  }
  return 0;
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
