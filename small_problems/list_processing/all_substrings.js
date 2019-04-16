function substrings(string) {
  var allSubstrings = [];
  var chars = string.split('');
  var counter = 0;
  chars.forEach(function (char) {
    var i;
    charIndex = chars.indexOf(char);
    for (i = counter; i <= chars.length; i += 1) {
      allSubstrings.push(chars.slice(charIndex, i).join(''))
    }
    counter += 1;
  })

  console.log(allSubstrings.flat());
}




substrings('abcde');

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
