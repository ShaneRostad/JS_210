function myOwnEvery(array, func) {
  var i;

  array.forEach(function (element) {
    if (!func(element)) {
      return false;
    }
  })
  return true;
}

var isAString = function (value) {
  return typeof value === 'string';
};

myOwnEvery(['a', 'a234', '1abc'], isAString);       // true
