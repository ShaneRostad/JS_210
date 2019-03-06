function logOddNumbers(num) {
  for (var i = 0; i <= num; i += 1) {
    if (i % 2 === 0) {
      continue;
    } else {
      console.log(i);
    }
  }
}



logOddNumbers(19);

// // output on console
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19
