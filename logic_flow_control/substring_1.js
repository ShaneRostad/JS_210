function substr(string, start, length) {
  var newStr = '';
  var i;
  var index;

  if (start < 0) {
    start = string.length + start;
  }

  for (i = 0; i < length; i += 1) {
    index = start + i;

    if (string[index] === undefined) {
      break;
    }

    newStr += string[index];
  }
  console.log(newStr);
}

var string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""
