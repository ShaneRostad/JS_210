var first = prompt('Enter the 1st number: ');
var second = prompt('Enter the 2nd number: ');
var third = prompt('Enter the 3rd number: ');
var fourth = prompt('Enter the 4th number: ');
var fifth = prompt('Enter the 5th number: ');

var numbers = [first, second, third, fourth, fifth]

var last = prompt('Enter the last number: ');

if (numbers.includes(last)) {
  console.log('The number ' + last + 'appears in ' + `[${first}, ${second}, ${third}, ${fourth}, ${fifth}]`);
}
