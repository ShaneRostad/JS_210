function substringsAtStart(string) {
  var chars = string.split('');
  newArr = [];
  var i;
  for (i = 1; i <= chars.length; i += 1) {
    newArr.push(chars.slice(0, i).join(''));
  }
  console.log(newArr);
}



substringsAtStart('abc');      // ["a", "ab", "abc"]
substringsAtStart('a');        // ["a"]
substringsAtStart('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
