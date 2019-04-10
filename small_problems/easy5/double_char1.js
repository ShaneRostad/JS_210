function repeater(string) {
  var chars = string.split('')
  var i;
  var doubleString = '';
  if (string === '') { return string; }

  for (i = 0; i < chars.length; i += 1) {
    doubleString += chars[i];
    doubleString += chars[i];
  }
  console.log(doubleString);
}



repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
