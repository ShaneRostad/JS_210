function isPrime(num) {
  if (num === 1) { return false; }
  for (var i = 0; i <= num; i += 1) {
    if (i !== 1 && i !== num) {
      if (num % i === 0) { return false; }
    }
  }
  return true;
}

console.log(isPrime(43));
console.log(isPrime(55));
