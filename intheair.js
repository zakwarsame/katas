const checkAir = function (samples, threshold) {
  // Code here!
  let dirtyCount = 0;

  for (let sample of samples) {
    if (sample === 'dirty') {
      dirtyCount++;
    }
  }

  if ((dirtyCount / samples.length) >= threshold) {
    return "Polluted"
  } else {
    return "Clean";
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))



  // https://gist.github.com/zakwarsame/b5ad8f7296886a767a40ebcbc64dea4f
