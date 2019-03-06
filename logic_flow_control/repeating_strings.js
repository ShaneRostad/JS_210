function repeat(string, times) {
  var newString = '';
  for (var i = 0; i <= times; i += 1) {
    newString += string;
  }
  console.log(newString);
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);
