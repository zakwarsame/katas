// write a program that takes any number of command line arguments, all strings, and reverses them before outputting them one at a time to the console.
// do not use javascript's array.prototype.reverse or array.prototype.join functions to solve this problem.

// for example:  node reverse.js hello goodbye
// returns => olleh eybdoog

const process = require("process");

let args = process.argv.slice(2);

function reversestring(strarr) {
  let reverseArr = [];

  strarr.map((word) => {
    let newword = "";
    for (let i = word.length - 1; i >= 0; i--) {
      newword = newword + word[i];
    }
    reverseArr.push(newword);
  });

  return reverseArr.join('\n')
}
  

console.log(reversestring(args))