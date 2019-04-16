function sumOfSums(array) {
  sum = 0;
  var i;
  var startNumber = array[0];
  for (i = 1; i <= array.length; i += 1) {
    numbers = array.slice(0, i);
    numbers.forEach(function (number) {
      sum += number;
    })
  }
  console.log(sum);
}





sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35
