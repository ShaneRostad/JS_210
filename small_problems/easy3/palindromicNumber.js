function isPalindromicNumber(number) {
  var string = String(number);
  var reverseString = string.split('').reverse().join('');

  return string === reverseString;
}


console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
isPalindromicNumber(5);            // true
