const numberOfVowels = (data) => {
  // Put your solution here
  let total = 0;
  for (let i of data) {
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
      total++;
    }
  }
  return total;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

  // https://gist.github.com/zakwarsame/9f67adad521bb7c16cad0dd502475484