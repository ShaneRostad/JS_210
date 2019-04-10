function doubleConsonants(string) {
  var chars = string.split('')
  var i;
  var doubleString = '';
  if (string === '') { return string; }

  for (i = 0; i < chars.length; i += 1) {
    if (!chars[i].match(/[aeiou]/i)) {
      doubleString += chars[i];
      doubleString += chars[i];
    } else {
      doubleString += chars[i];
    }
  }
  console.log(doubleString);
}



doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
