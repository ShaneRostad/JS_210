billTotal = parseInt(prompt('What is the bill?'), 10);
tipPercent = parseInt(prompt('What is the tip percentage?'), 10) * .01;
tipTotal = billTotal * tipPercent;

console.log(`The tip is $${tipTotal}`);
console.log(`The total is $${billTotal + tipTotal}`)
