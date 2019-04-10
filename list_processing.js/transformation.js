function myMap(array, func) {
  var newArr = [];
  var i;

  for (i = 0; i < array.length; i += 1) {
    newArr.push(func(array[i]));
  }
  return newArr;
}

var plusOne = function (n) { return n + 1; };

myMap([1, 2, 3, 4], plusOne);       // [ 2, 3, 4, 5 ]
