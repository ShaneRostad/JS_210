function centerOf(string) {
  console.log(string.length);
  var half = Math.floor(string.length / 2);
  if (string.length % 2 === 0) {
    return string.split('').splice(half - 1, 2).join('');
  } else {
    return string[half];
  }
}



console.log(centerOf('I Love Ruby'));      // "e"
console.log(centerOf('Launch School'));    // " "
console.log(centerOf('Launch'));           // "un"
console.log(centerOf('Launchschool'));     // "hs"
console.log(centerOf('x'));                // "x"
