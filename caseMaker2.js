/**
 * Create a function named makeCase that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:
 * @param {*} input
 * @param {*} word
 * @returns
 */

const makeCase = function (input, word) {
  // Put your solution here
  let wordArray = [];

  if (Array.isArray(word)) {
    wordArray = [...word];
  } else {
    wordArray.push(word);
  }

  if (wordArray.length > 1) {
    const sortingArr = [
      "camel",
      "pascal",
      "snake",
      "kebab",
      "title",
      "vowel",
      "consonant",
      "upper",
      "lower",
    ];
    wordArray.sort((a, b) => sortingArr.indexOf(a) - sortingArr.indexOf(b));
  }

  wordArray.map((caseStyle) => {
    switch (caseStyle) {
      case "camel":
        input = input
          .replace(/\s\w/g, (char) => char.toUpperCase())
          .replace(/\s/g, "");
        break;

      case "pascal":
        input = input
          .replace(/\b\w/g, (char) => char.toUpperCase())
          .replace(/\s/g, "");
        break;

      case "snake":
        input = input.replace(/\s/g, "_");
        break;

      case "kebab":
        input = input.replace(/\s/g, "-");
        break;

      case "title":
        input = input.replace(/\b\w/g, (char) => char.toUpperCase());
        break;

      case "vowel":
        input = input.replace(/[aeiou]/gi, (char) => char.toUpperCase());
        break;

      case "consonant":
        input = input.replace(/[^aeiou]/gi, (char) => char.toUpperCase());
        break;

      case "upper":
        input = input.toUpperCase();
        break;

      case "lower":
        input = input.toLowerCase();
        break;
    }
  });

  return input;
};

// console.log(makeCase("this is a string", "camel"));
// console.log(makeCase("this is a string", "pascal"));
// console.log(makeCase("this is a string", "snake"));
// console.log(makeCase("this is a string", "kebab"));
// console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
// console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
