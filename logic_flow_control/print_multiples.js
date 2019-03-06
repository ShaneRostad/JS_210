function logMultiples(num) {
  if (num * 5 < 100) { console.log(num * 5); }
  if (num * 3 < 100) { console.log(num * 3); }
  if (num < 100) { console.log(num); }
}






logMultiples(17);
// // output (5x, 3x and 1x)
// 85
// 51
// 17
//
// logMultiples(21);
// // output (3x and 1x)
// 63
// 21
