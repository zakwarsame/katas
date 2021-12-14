const camelCase = function(input) {
    // Your code here
    const wordsArr = input.split(" ")
    if(wordsArr.length <= 1) return input
    const firstWord = wordsArr.slice(0,1).join("")
    const restOfWords = wordsArr.slice(1).map(each => each.charAt(0).toUpperCase() + each.slice(1)).join("")
    return firstWord + restOfWords
  };
  
  console.log(camelCase("this is a string"));
  console.log(camelCase("loopy lighthouse"));
  console.log(camelCase("supercalifragalisticexpialidocious"));

/*
  
We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

OUTPUT

thisIsAString
loopyLighthouse
supercalifragalisticexpialidocious

*/