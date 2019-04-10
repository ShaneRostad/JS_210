function interleave(array1, array2) {
  var i;
  newList = [];
  for (i = 0; i < array1.length; i += 1) {
    newList.push(array1[i]);
    newList.push(array2[i]);
  }
  return newList;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));
