function multiplesOfThreeAndFive(num1, num2) {
  var i;
  for (i = num1; i <= num2; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i}!`);
    } else if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
    }
  }
}


multiplesOfThreeAndFive(1, 100);
