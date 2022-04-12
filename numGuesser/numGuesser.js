/**
 * Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end, the number of tries needed should be printed.

Inputting the same number multiple times should only count as one try. If the user provides an answer which isn't a number, print an error message and do not count this as a try.
 */



// install package that helps with prompting cli
let prompt = require("prompt-sync")();

// code below (replace this example)

const generateNum = () => {
  return Math.floor(Math.random() * 100);
};


const numGuesser = () => {
  let num = generateNum();
  let answer = prompt("Guess a number: ");
  let attempts = 1;
  let prevAnswer = answer;

  console.log(num);
  while (num !== Number(answer)) {
    if (answer > num) {
      prevAnswer = answer;
      console.log("Too High");
      answer = prompt("Guess a number: ");
    } else if (answer < num) {
      prevAnswer = answer;
      console.log("Too Low");
      answer = prompt("Guess a number: ");
    } else if (isNaN(num)) {
      prevAnswer = answer;
      console.log("Not a number! Try again!");
      answer = prompt("Guess a number: ");
    }

    if (prevAnswer !== answer) {
      attempts++;
    }
  }

  if (Number(answer) === num) {
    console.log(`You got it! You took ${attempts} attempts!`);
  }
};

numGuesser();
