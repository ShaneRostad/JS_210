function multiplyList(array1, array2) {
  var i;
  var newArr = [];

  for (i = 0; i < array1.length; i += 1) {
    newArr.push(array1[i] * array2[i]);
  }
  return newArr;
}



console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
