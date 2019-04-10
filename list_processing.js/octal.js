// 233                          // octal
// = 2*8^2 + 3*8^1 + 3*8^0
// = 2*64  + 3*8   + 3*1
// = 128   + 24    + 3
// = 155                          // decimal


function octalToDecimal(numberString) {
  var digits = numberString.split('').map(function(element) {
    return parseInt(element, 10);
  });
  var numberOfDigits = digits.length;
  var i;
  var sum = 0;
  for (i = 0; i < numberOfDigits; i += 1) {
    var currentNum = digits[i];
    var power = numberOfDigits - 1 - i;
    sum += currentNum * (Math.pow(8, power));
  }
  console.log(sum);
}


octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9
