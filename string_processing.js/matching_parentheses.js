// accept a string
// split the string and iterate over it
// count every (

function isBalanced(string) {
  var count = 0;
  var i;
  for (i = 0; i < string.length; i += 1) {
    if (count < 0) { return false; }

    if (string[i] === '(') {
      count += 1;
    } else if (string[i] === ')') {
      count -= 1;
    }
  }

  if (count > 0) {
    return false;
  }
  return true;
}





console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false
