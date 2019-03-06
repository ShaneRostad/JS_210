let a = prompt('Enter a number');

if (a === '3') {
  console.log("a is 3");
} else if (a === '4') {
  console.log("a is 4");
} else {
  console.log("a is neither 3, nor 4");
}


a = 5
if (a) {
  console.log("hwo can this be true?");
} else {
  console.log("it is not true");
}


b = 0
if (b) {
  console.log("how can this be true?");
} else {
  console.log("it is not true");
}

let x;

if (x = 5) {
  console.log("how can this be true?");
} else {
  console.log("it is not true");
}

function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log("enter a valid number.");
    return;
  }

  if (number % 2 === 1) {
    console.log('odd');
  } else {
    console.log('even');
  }
}


if (foo()) {
  return 'bar';
} else {
  return qux();
}

function returnCaps(string) {
  if (string.length > 10) {
    return string.toUpperCase;
  } else {
    return string;
  }
}


function numberRange(number) {
  if (number.length >= 0 && number.length <= 50) {
    console.log(`${number} is between 0 and 50`);
  } elseif (number.length > 50 && number.length <= 75) {
    console.log(`${number} is between 0 and 50`);
  } elseif (number.length > 100) {
    console.log(`${number} is greater than 100`)
  } elseif (number.length < 0) {
    console.log(`${number} is less than 0`)
  }
}

let counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter = counter + 1;
}
