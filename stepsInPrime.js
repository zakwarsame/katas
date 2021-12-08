const isPrime = (num) => {
  let count = 2;
  while (count < num / 2 + 1) {
    if (num % count !== 0) {
      count++;
      continue;
    }
    return false;
  }
  return true;
};

const primeBetween = (a, b) => {
  let primeNumbers = [];
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
};

// console.log(primeBetween(100, 110));

function step(g, m, n) {
  // your code
  const result = primeBetween(m, n);
  let holdingNumber;
  let count = 0;
  let final = [];

  while (count < result.length) {
    holdingNumber = result[count];

    for (i = 0; i < result.length; i++) {
      if (count !== i) {
        if (result[i] - holdingNumber === g) {
          final.push(holdingNumber);
          final.push(result[i]);
          return final;
        }
      }
    }

    count++;
  }

  return null;
}

console.log(step(4,100,110));
