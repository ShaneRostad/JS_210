function average(array) {
  var i;
  var sum = 0;

  for (i = 0; i < array.length; i += 1) {
    sum += array[i];
  }
  return Math.floor(sum / array.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
average([9, 47, 23, 95, 16, 52]);    // 40
