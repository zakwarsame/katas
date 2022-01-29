/**
 * Description
Given an array X of positive integers, its elements are to be transformed by running the following operation on them as many times as required:

if X[i] > X[j] then X[i] = X[i] - X[j]

When no more transformations are possible, return its sum ("smallest possible sum").

For instance, the successive transformation of the elements of input X = [6, 9, 21] is detailed below:

X_1 = [6, 9, 12] # -> X_1[2] = X[2] - X[1] = 21 - 9
X_2 = [6, 9, 6]  # -> X_2[2] = X_1[2] - X_1[0] = 12 - 6
X_3 = [6, 3, 6]  # -> X_3[1] = X_2[1] - X_2[0] = 9 - 6
X_4 = [6, 3, 3]  # -> X_4[2] = X_3[2] - X_3[1] = 6 - 3
X_5 = [3, 3, 3]  # -> X_5[1] = X_4[0] - X_4[1] = 6 - 3
The returning output is the sum of the final transformation (here 9).

Example
solution([6, 9, 21]) #-> 9
Solution steps:
[6, 9, 12] #-> X[2] = 21 - 9
[6, 9, 6] #-> X[2] = 12 - 6
[6, 3, 6] #-> X[1] = 9 - 6
[6, 3, 3] #-> X[2] = 6 - 3
[3, 3, 3] #-> X[1] = 6 - 3
Additional notes:
There are performance tests consisted of very big numbers and arrays of size at least 30000. Please write an efficient algorithm to prevent timeout.
 */

// function solution(numbers) {

//   const sortedArr = numbers.sort((a, b) => b - a)

//   while (sortedArr[0] > sortedArr[sortedArr.length - 1] ) {

//     console.log(sortedArr);

//     for (let i = 0; i < numbers.length; i++) {
//     //   console.log("inside i loop", numbers[i]);
//       for (let j = 0; j < numbers.length; j++) {
//         if (numbers[i] > numbers[j]) {
//           numbers[i] = numbers[i] - numbers[j];
//         }
//       }
//     }
//   }
//   return numbers.reduce((a,b) => a+b )
// }

// console.log(solution([3721, 14641, 105625, 235225, 101124, 23409, 147456, 42025, 119025, 6241, 173889, 36864, 64516, 127449, 14161, 218089, 99856, 7225, 169744, 18769, 3364, 142129, 166464, 9025, 14161, 228484, 9801, 25281, 76729, 187489, 118336, 38025, 17424, 134689, 191844, 5041, 16900, 32041, 13689, 28561, 54289, 25921, 219024, 16641, 90000, 28561, 155236, 26569, 86436, 189225, 78400, 46225, 5041, 11236, 236196, 30976, 243049, 20449, 184041, 185761, 187489, 29929, 236196, 35344, 58564, 180625, 97344, 78961, 67081, 35344, 103684, 235225, 35721, 36864, 249001, 38025, 55696, 233289, 112225, 140625, 28224, 40804, 15625, 241081, 142884, 111556, 190096, 212521, 59049, 231361, 192721, 240100, 175561, 158404, 46225, 6889, 92416, 200704]));

// function solution(numbers) {
//   let sortedArr = numbers.sort((a, b) => b - a)

//     while (sortedArr[0] > sortedArr[numbers.length - 1]) {
//       for (let i = 0; i < numbers.length; i++) {
//       //   console.log("inside i loop", numbers[i]);
//         for (let j = 0; j < numbers.length; j++) {
//           if (numbers[i] > numbers[j]) {
//             numbers[i] = numbers[i] - numbers[j];
//           }
//         }
//       }
//       sortedArr = numbers.sort((a, b) => b - a)
//     }
//     return numbers.reduce((a,b) => a+b )
//   }

function solution(numbers) {
  let sortedArr = numbers.sort((a, b) => b - a);
  let newArr = [...sortedArr];

  while (newArr[0] > newArr[numbers.length - 1]) {
    newArr = sortedArr.map((num, i, arr) => {
      if (num > arr[i + 1]) {
        return num - arr[i + 1];
      }
      return num;
    });
    sortedArr = newArr.sort((a, b) => b - a);
  }

  return newArr.reduce((a,b) => a+b );
}

console.log(solution([25891510, 33963910, 26977750, 1886040, 26977750, 28648960, 76881240, 11908960, 48612960, 59471640, 74431000, 11908960, 8035510, 45949750, 36684160, 36471190, 3819510, 13283190, 4243590, 24477910, 34169440, 23614560, 67029750, 12276310, 77500000, 72919750, 14463360, 1651990, 4689990, 4689990, 30370390, 28086310, 2567110, 69355990, 43361560, 27529240, 65311110, 10044000, 32743750, 2400640, 55993750, 9822040, 2567110, 61112160, 43593750, 41526360, 31744000, 43129990, 20475190, 11787750, 72319590, 69649560, 5989510, 15554560, 19066240, 1837990, 77500000, 41753590, 45711360, 53132760, 21769750, 61112160, 15004000, 6975000, 76881240, 1007190, 23785990, 36047110, 47151000, 38192310, 66741760, 3038310, 52111000, 56787040, 1391590, 5239000, 18456160]));

/**
 *
 * [21,9,6]
 * [12,9,6] ->  [12,3,6] -> [12,6,3] -> [6,3,3] -> [6,3,3] -> [3,3,3]
 *
 * [3,9,6]
 * -> sort [9,6,3]
 * [3,
 * [3,3,6]
 * []
 */
