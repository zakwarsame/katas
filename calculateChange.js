const calculateChange = function(total, cash) {
    // Your code here
    const amount = (cash - total)/100
    let changeTracker = amount;
    let result = {};

    while (changeTracker > 0){
        if(changeTracker >= 20 ){
            changeTracker = changeTracker - 20
            result['twentyDollars'] ++
        } else {
            changeTracker = changeTracker - changeTracker
        }
    }



    return changeTracker
  };
  
  console.log(calculateChange(1787, 2000));
  console.log(calculateChange(2623, 40000));
  console.log(calculateChange(501, 1000));