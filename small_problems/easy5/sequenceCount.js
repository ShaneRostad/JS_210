function sequence(count, start) {
  var i;
  var returnNumbers = [];

  for (i = 1; i <= count; i += 1) {
    returnNumbers.push(start * i);
  }
  console.log(returnNumbers);
}


sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []
