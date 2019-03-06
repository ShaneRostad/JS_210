

function generatePattern(num) {
  var line = [];
  var counter = 1;

  while (counter <= num) {
    line.push(counter);
    console.log(`${line.join('')}${'*'.repeat(num - counter)}`)
    counter += 1;
  }
}

generatePattern(20);
