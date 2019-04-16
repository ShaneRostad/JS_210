function substrings(string) {
  var allSubstrings = [];
  var chars = string.split('');
  var counter = 0;
  chars.forEach(function (char) {
    var i;
    for (i = counter; i <= chars.length; i += 1) {
      allSubstrings.push(chars.slice(counter, i).join(''))
    }
    counter += 1;
  })

  return allSubstrings.flat();
}

function palindromes(string) {
  var allSubstrings = substrings(string);
  var allPalindromes = allSubstrings.filter(function (string) {
    if (string.length <= 1) {
      false;
    } else if (isPalindrome(string)) {
      return string;
    }
  });
  // console.log(allPalindromes);
  return returnUniqueArray(allPalindromes);
}

function returnUniqueArray(array) {
  newArr = [];
  array.forEach(function (element) {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  })
  return newArr;
}

function isPalindrome(substring) {
  return substring.split('').reverse('').join('') === substring;
}

console.log(palindromes('madam'));




// palindromes('abcd');       // []
// palindromes('madam');      // [ "madam", "ada" ]
//
console.log(palindromes('hello-madam-did-madam-goodbye'));
// // returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]
//
palindromes('knitting cassettes');
// // returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
