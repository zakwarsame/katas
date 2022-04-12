/**
 * The square root of 54 (Math.sqrt(54)) is 7.3484692283495345. If we round this number up (Math.ceil(Math.sqrt(54))), we get 8. If we use that for the number of characters on each line (the number of columns), then our text will be close to a square shape.

The message is then coded by reading down the columns going left to right. For example, the message above is coded as:

And that's the output of the algorithm. We can then reverse the process to decrypt the text and read the original message.
 * 
 * @param {str} message 
 * @returns {array}
 */

const squareCode = function (message) {
  // Put your solution here

  let noSpace = message.replace(/\s/g, "");
  let squares = Math.ceil(Math.sqrt(noSpace.length));
  let noSpaceArr = noSpace.split("");
  let squareRows = [];

  let squareCodeArr = [];

  let i = 0;

  while (i < noSpaceArr.length) {
    let tempStrArr = noSpaceArr;
    let temp = squares;
    let str = "";

    for (let j = 0; j < temp; j++) {
      str = str + tempStrArr[0];
      tempStrArr.splice(0, 1);
    }

    squareRows.push(str);
    if (tempStrArr.length <= temp && tempStrArr.length > 0) {
      squareRows.push(tempStrArr.join(""));
    }

    i++;
  }


  // implementing column functioning 

  let h = 0;
  while (h <= squareRows.length) {
    let newStr = "";

    for (let k = 0; k < squareRows.length; k++) {
      newStr = newStr + squareRows[k].charAt(h);
    }
    if (newStr.length > 0) squareCodeArr.push(newStr);
    h++;
  }

  return squareCodeArr.join(' ');
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
