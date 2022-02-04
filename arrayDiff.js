/**
 * Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
 */

// function hasNum(arr1, arr2) {
//   for (let num of arr2) {
//     return arr1.includes(num)
//   }
//   return false;
// }

// function arrayDiff(a, b) {
//   if (!a) return a;
//   let filterArr = [...a];
//   if (!hasNum(a, b)) return a;
//   for (let num of b) {
//     filterArr = filterArr.filter((el) => el !== num);
//   }
//   return filterArr;
// }

function arrayDiff(a, b) {
  let set = new Set(b)
  return a.filter(x => !set.has(x));
}

console.log(arrayDiff([1, 2, 3], [1, 2])); // [3]
console.log(arrayDiff([3, 4], [3])); // [4]
