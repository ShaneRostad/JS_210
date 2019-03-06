// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];
//
// myArray.forEach(function (arr) {
//   arr.forEach(function (num) {
//     if (num % 2 === 0) {
//       console.log(num);
//     }
//   });
// });

// let myArray = [
//   1, 3, 6, 11,
//   4, 2, 4, 9,
//   17, 16, 0,
// ];
//
// let newA = myArray.map(function (num) {
//   if (num % 2 == 0) {
//     return 'even';
//   } else {
//     return 'odd';
//   }
// });
//
// console.log(newA)

// function removeNonInteger(array) {
//   return array.filter(function (element) {
//     return Number.isInteger(element);
//   });
// }
//
// let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let newArray = removeNonInteger(array);
// console.log(newArray);

// function oddLengths(array) {
//   lengths = array.map(function (element) {
//     return element.length;
//   });
//   return lengths.filter(function (num) {
//     if (num % 2 === 1) {
//       return num;
//     }
//   });
// }
//
// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]

// let numbers1 = [1, 3, 5, 7, 9, 11];
// let numbers2 = [];
// let numbers3 = [2, 4, 6, 8];
//
// console.log(numbers1.includes(3))
