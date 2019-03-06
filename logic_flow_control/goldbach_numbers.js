function isPrime(num) {
  if (num === 1) { return false; }
  for (var i = 0; i <= num; i += 1) {
    if (i !== 1 && i !== num) {
      if (num % i === 0) { return false; }
    }
  }
  return true;
}

function checkGoldbach(num){
  for (var i = 2; i <= num / 2; i += 1) {
    first = i;
    second = (num - i);
    if (isPrime(first) && isPrime(second)) {
      console.log(`${first} ${second}`);
    }
  }

}

checkGoldbach(100);
