function multiplyAllPairs(arrayFirst, arraySecond) {
  var products = [];

  arrayFirst.forEach(function (arrayFirstNumber) {
    arraySecond.forEach(function (arraySecondNumber) {
      products.push(arrayFirstNumber * arraySecondNumber);
    });
  });
  return sortArray(products);
}

function sortArray(products) {
  sortedArray = products.sort(function (a, b) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  })
  return sortedArray;
}


multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
