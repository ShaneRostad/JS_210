//For this practice problem, we'll represent rectangles
//as Arrays with two elements: a height and a width.

//Write a Function named totalArea that takes an Array of rectangles as an argument.
//The Function should return the total area covered by all the rectangles.

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function product(array) {
  return array[0] * array[1];
}

function totalArea(array) {
  var sum = 0;
  array.forEach(function (element) {
    sum += product(element)
  });
  return sum;
}

function totalSquareArea(array) {
  var sum = 0;
  array.forEach(function (element) {
    if (element[0] === element[1]) {
      sum += product(element);
    }
  });
  return sum;
}

console.log(totalArea(rectangles));
console.log(totalSquareArea(rectangles));




totalArea(rectangles);    // 141
