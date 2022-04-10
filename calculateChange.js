/**
 * Create a function named calculateChange that takes in a total amount of a bill and the total cash given to pay that bill. Return a new object that describes the total amount of change for the cashier to give back. Omit any types of change that you shouldn't give back, i.e. if you don't give back a twenty dollar bill, don't include it in the results.
 * @param {int} total
 * @param {int} cash
 * @returns {obj}
 */

const calculateChange = function (total, cash) {
  // Your code here
  const amount = cash - total;
  let changeTracker = amount;
  let result = {};

  while (changeTracker > 0) {
    if (changeTracker >= 2000) {
      changeTracker = changeTracker - 2000;
      if (!result["twentyDollars"]) {
        result["twentyDollars"] = 1;
      } else {
        result["twentyDollars"]++;
      }
    } else if (changeTracker >= 1000) {
      changeTracker = changeTracker - 1000;
      if (!result["tenDollars"]) {
        result["tenDollars"] = 1;
      } else {
        result["tenDollars"]++;
      }
    } else if (changeTracker >= 500) {
      changeTracker = changeTracker - 500;
      if (!result["fiveDollars"]) {
        result["fiveDollars"] = 1;
      } else {
        result["fiveDollars"]++;
      }
    } else if (changeTracker >= 200) {
      changeTracker = changeTracker - 200;
      if (!result["twoDollars"]) {
        result["twoDollars"] = 1;
      } else {
        result["twoDollars"]++;
      }
    } else if (changeTracker >= 100) {
      changeTracker = changeTracker - 100;
      if (!result["oneDollar"]) {
        result["oneDollar"] = 1;
      } else {
        result["oneDollar"]++;
      }
    } else if (changeTracker >= 25) {
      changeTracker = changeTracker - 25;
      if (!result["quarter"]) {
        result["quarter"] = 1;
      } else {
        result["quarter"]++;
      }
    } else if (changeTracker >= 10) {
      changeTracker = changeTracker - 10;
      if (!result["dime"]) {
        result["dime"] = 1;
      } else {
        result["dime"]++;
      }
    } else if (changeTracker >= 5) {
      changeTracker = changeTracker - 5;
      if (!result["nickel"]) {
        result["nickel"] = 1;
      } else {
        result["nickel"]++;
      }
    } else if (changeTracker >= 1) {
      changeTracker = changeTracker - 1;

      if (!result["penny"]) {
        result["penny"] = 1;
      } else {
        result["penny"]++;
      }
    } else {
      console.log("last", result, changeTracker);
      changeTracker = 0;
    }
  }

  return result;
};

console.log(calculateChange(1787, 2000)); //{ twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000)); // { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000)); //{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
