function isXor (first, second) {
  if ((!!first === true && !!second === false) || (!!first === false && !!second === true)) {
    return true;
  } else {
    return false;
  }
}



console.log(isXor(false, true));
console.log(isXor(false, 3));        // true
console.log(isXor('a', undefined));  // true
console.log(isXor(null, ''));        // false
console.log(isXor('2', 23));    
