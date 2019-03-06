
function toLowerCase(string) {
  Lowers = ['a', 'b', 'c', 'd', 'e', 'f'];

  newString = '';
  for (var i = 0; i < string.length; i += 1) {
    if (Lowers.includes(string[i])) {
      newString += string[i];
    } else {
      asciiNumeric = string[i].charCodeAt(0);
      asciiNumeric += 32;
      newString += String.fromCharCode(asciiNumeric);
    }
  }
  console.log(newString);
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');
