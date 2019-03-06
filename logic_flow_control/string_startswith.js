function startsWith(string, searchString) {
  var newString = '';
  for (var i = 0; i < searchString.length; i += 1) {
    newString += string[i];
  }

  console.log(!!(newString === searchString));


}

var str = 'We put comprehension and master above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false

var longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);
