/**
 * Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 */

var moveZeros = function (arr) {
  // TODO: Program me
  let anArr = [];
  let secArr = [];
  arr.forEach((el, ind, arr1) => {
    if (el === 0) {
      secArr.push(0);
    } else if (el !== 0) {
      anArr.push(el);
    }
  });
  return [...anArr, ...secArr];
};

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
