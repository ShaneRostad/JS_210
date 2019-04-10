function isPalindrome(string) {
  var chars = string.split('');
  var charsBackwards = string.split('').reverse();
  var i;
  string = string.toLowerCase();
  return string === stripString(string).split('').reverse().join('');
}

function stripString(string) {
  var regex = /[^a-zA-Z]/;
  var counter = 0;
  newStr = string;

  while (counter < string.length) {
    newStr = newStr.replace(regex, '');
    counter += 1;
  }
  return newStr
}


console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');
