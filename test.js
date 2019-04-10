function isEmpty(value) {
  var type = typeof value;
  if (type === 'string') {
    return value.length === 0;
  } else if (type === 'object') {
    return Object.keys(value).length === 0;
  }
}

// old test cases
isEmpty({});                  // true
isEmpty({ name: 'Janice' });  // false

isEmpty('');                  // true
isEmpty('Janice');            // false

isEmpty([]);                  // true
isEmpty(['Janice']);          // false


// new test case
array = [];
array.length = 3;
console.log(isEmpty(array));
