const conditionalSum = (values, condition) => {
    if (condition === "even") {
      return values.filter((num) => num % 2 === 0).reduce((a, b) => a+b);
    } else {
      return values.filter((num) => num % 2 > 0).reduce((a, b) => {
          return a + b;
        }, 0);
    }
  };
  
  console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
  console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
  console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
  console.log(conditionalSum([], "odd"));

//   https://gist.github.com/zakwarsame/6848d41c0e47a2ff1427d77658c60c0f