function reverseNumber(num) {
  var i;
  var chars = String(num).split('');
  var newStr = '';
  for (i = chars.length - 1; i >= 0; i -= 1) {
    if (chars[i] !== 0) {
      newStr += chars[i];
    }
  }
  console.log(parseInt(newStr, 10));
}






reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that zeros get dropped!
reverseNumber(1);        // 1
