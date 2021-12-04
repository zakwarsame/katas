const sumLargestNumbers = function (data) {
    // Put your solution here
    return data.sort((a, b) => a - b).slice(-2).reduce((a, b) => a + b)
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));


// https://gist.github.com/zakwarsame/0d4b901a90570c5d2f1a9d117c8ef100