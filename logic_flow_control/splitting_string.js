function splitString(string, delimiter) {
  newString = '';
  length = string.length;
  for (var i = 0; i <= length; i += 1) {
    if (string[i] === delimiter || string[i] === string[length]) {
      console.log(newString);
      newString = '';
    } else if (delimiter === '') {
      console.log(string[i]);
    } else {
      newString += string[i];
    }
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello', '');
