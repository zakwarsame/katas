function solution(list) {
  // TODO: complete solution
  let newArr = [];
  let myObj = {
    count: 0,
    array: [],
  };

  list.forEach((num, i, arr) => {
    if (myObj["count"] >= 3) {
      console.log(myObj["array"]);
      newArr.push(
        `${myObj["array"][0]}-${myObj["array"][myObj["array"].length - 1]} `
      );
      myObj["count"] = 0;
      myObj["array"] = [];
    }

    if (num + 1 === arr[i + 1]) {
      if (num - 1 === arr[i - 1] && !myObj["array"].includes(num)) {
          
          // myObj["array"].push(num);
        }
        myObj["count"]++;
      myObj["array"].push(num);
    } else if (num + 1 !== arr[i + 1]) {
      myObj["count"] = 0;
      myObj["array"] = [];
    }
  });

  return newArr;
}

console.log(
  solution([
    -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
    19, 20,
  ])
);
