const makeCase = function(input, word) {
    // Put your solution here
    let wordArray = [];
    let convertedString = "";
    let rest = "";

    let firstWord = input.split(" ").slice(0,1).join("");
    let restArray = input.split(" ").slice(1)

    if(Array.isArray(word)) {
        wordArray = [...word]
    } else {
        wordArray.push(word)
    }





   let something =  wordArray.map((caseStyle)=> {
        switch (caseStyle) {
            case "camel":
                rest = restArray.map(e=> e.charAt(0).toUpperCase() + e.slice(1)).join("")
                return firstWord + rest

            case "pascal":
                firstWord = firstWord.charAt(0).toUpperCase() + firstWord.slice(1)
                rest = restArray.map(e=> e.charAt(0).toUpperCase() + e.slice(1)).join("")
                return firstWord + rest
        }
    })

    return 
  }


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["camel", "pascal"]));