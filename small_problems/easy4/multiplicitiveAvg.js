function showMultiplicativeAverage(array) {
  var i;
  var product = 1;

  for (i = 0; i < array.length; i += 1) {
    product *= array[i];
  }
  console.log((product / array.length).toFixed(3));
}






showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
