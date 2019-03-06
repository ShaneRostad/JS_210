function gcd(numOne, numTwo) {
  var numOneDivisors = [];
  var numTwoDivisors = [];
  var answers = [];

  for (var i = 1; i <= numOne; i += 1) {
    if (numOne % i === 0) {
      numOneDivisors.push(i);
    }
    if (numTwo % i === 0) {
      numTwoDivisors.push(i);
    }
  }

  numTwoDivisors.forEach(function(number) {
    if (numOneDivisors.includes(number)) {
      answers.push(number);
    }
  });

  console.log(answers.sort()[answers.length - 1]);
}

gcd(12, 4;
gcd(15, 10);
gcd(9, 2);
