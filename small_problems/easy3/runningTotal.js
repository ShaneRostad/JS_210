function runningTotal(array) {
  var returnArray = [];
  var i;

  for (i = 0; i < array.length; i += 1) {
    if (i === 0) {
      returnArray.push(array[i]);
    } else {
      returnArray.push(array[i] + returnArray[i - 1]);
    }
  }
  console.log(returnArray);
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []
