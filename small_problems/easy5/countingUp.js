function sequence(number) {
  var i;
  var numbers = [];

  for (i = 1; i <= number; i += 1) {
    numbers.push(i);
  }
  return numbers;
}



console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]
