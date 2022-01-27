/**
 * Task
Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
 */

function deleteNth(arr, n) {
  // ...
  let finArr = [];
  let obj = {};

  arr.forEach((el) => {
    if (obj[el] && obj[el] < n) {
      obj[el]++;
      finArr.push(el);
    } else if (!obj[el]) {
      obj[el] = 1;
      finArr.push(el);
    }
  });

  return finArr;
}

console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2)); // return [1,2,3,1,2,3]

console.log(deleteNth([1, 1, 1, 1], 2)); // return [1,1]

/**
 * // alternate soln
 * function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
}
 */
