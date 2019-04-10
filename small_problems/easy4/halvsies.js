function halvsies(array) {
  var i;
  var returnArr = [[],[]];
  for (i = 0; i < array.length; i += 1) {
    if (i <= (array.length / 2)) {
      returnArr[0].push(array[i]);
    } else {
      returnArr[1].push(array[i]);
    }
  }
  console.log(returnArr);
}






halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]
