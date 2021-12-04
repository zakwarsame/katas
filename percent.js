const urlEncode = function (text) {
    let trimmed = text.trim();
    let encoded = "";
    for (let i = 0; i < trimmed.length; i++) {
      if (trimmed[i] === " ") {
        encoded += "%20";
      } else {
        encoded += trimmed[i];
      }
    }
    return encoded;
  }
  
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

// https://gist.github.com/zakwarsame/e1dadb7f4936d6c622d567eb99e61e0b