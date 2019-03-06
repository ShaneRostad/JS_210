function getNumber(prompt) {
  let rlSync = require('readline-sync');
  let number = rlSync.question(prompt)
  return number
}

firstNumber = getNumber('Enter the first number: ');
secondNumber = getNumber('Enter the second number: ');
console.log(firstNumber * secondNumber)
