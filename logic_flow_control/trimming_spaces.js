function trimLeft(string) {
  var chars = string.split('');
  var copyMode = false;
  var answer = [];
  chars.forEach(function(element) {
    if (element != ' ') {
      copyMode = true;
    }
    if (copyMode === true) {
      answer.push(element);
    }
  });
  return answer.join('');
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

function trim(string) {
  var trimmedString = trimLeft(string);
  //reverse the string then trim left again
  trimmedString = trimLeft(reverseString(trimmedString));
  return reverseString(trimmedString);
}

console.log(trim('  a  b c  '));
