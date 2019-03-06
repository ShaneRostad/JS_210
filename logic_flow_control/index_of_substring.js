function isEqual(element) {
  return element;
}

function indexOf(firstString, secondString) {
  var firstArray = firstString.split('');
  var secondArray = secondString.split('');

  firstArray.forEach(function(character) {
    secondArray.forEach(function(char) {
      if (character === char) {
        
      }
    });

  });
}

console.log(indexOf('Some strings', 's'));

//
// function lastIndexOf(firstString, secondString) {
//
// }

//searches for the first instance of a substring in firstString
// that matches the string secondString, and returns the index
// of the character where that substring begins.
