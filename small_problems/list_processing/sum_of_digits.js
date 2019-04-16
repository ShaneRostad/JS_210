//Write a function that takes one argument, a positive integer,
// and returns the sum of its digits. Do this using list processing techniques.


function sum(integer) {
  var sum = 0;
  String(integer).split('').forEach(function(char) {
    sum += parseInt(char, 10);
  });
  return sum;
}




sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45
