function union(array1, array2) {
  var newArr = [];

  for (var i = 0; i < array1.length; i += 1) {
    if (!newArr.includes(array1[i])) {
      newArr.push(array1[i]);
    }
  }

  for (var j = 0; j < array2.length; j += 1) {
    if (!newArr.includes(array2[j])) {
      newArr.push(array2[j]);
    }
  }
  return newArr;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
