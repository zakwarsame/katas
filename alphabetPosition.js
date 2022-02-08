/**
 * Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
 * @param {*} text 
 * @returns 
 */

const alphabetPosition = (text) => {
  let str = text.replace(/[^a-z]/gi, "");
  let arr = [];
  for (let i in str) {
    arr.push(str.toLowerCase().charCodeAt(i) - 96);
  }
  return arr.join(" ");
};

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
