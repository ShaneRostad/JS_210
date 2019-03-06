function substring(string, start, end) {
  var newStr = '';
  var i;
  var index;

  if (start === end) {
    return '';
  }

  if (start == 'b') {
    start = start.length;
  }

  if (end == 'b') {
    end = end.length;
  }

  if (end === undefined) {
    end = string.length;
  }

  if (start > end) {
    var hold = start;
    start = end;
    end = hold;
  }

  if (start < 0) {
    start = 0;
  }

  if (end < 0) {
    end = 0;
  }

  for (i = 0; i < end - start; i += 1) {
    index = start + i;

    if (string[index] === undefined) {
      break;
    }

    newStr += string[index];
  }
  console.log(newStr);
}



var string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"
