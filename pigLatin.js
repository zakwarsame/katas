/**
 * Write a program that takes any number of command line arguments, converts each to pig latin (the rules are in the next paragraph), then puts the translated words together into one sentence logged to the console.

The true pig latin rules would be a bit difficult to implement, so let's simplify them. Convert a word to pig latin by taking its first letter, moving it to the end of the word, then adding "ay" after it all.

If the final program were called pig-latin.js, then the following Terminal commands show several example outputs:

node pig-latin.js pig latin
igpay atinlay
 */

const process = require("process");

let args = process.argv.slice(2);

const pigLatin = (strArr) => {
  let wordArr = [];

  strArr.map((eachWord) => {
    let piglatin = "";
    piglatin = piglatin + eachWord.slice(1) + eachWord.charAt(0) + "ay";
    wordArr.push(piglatin);
  });

  return wordArr.join(" ");
};

console.log(pigLatin(args));
