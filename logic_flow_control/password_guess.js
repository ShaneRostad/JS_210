var attempts = 0;
do {
  var password = 'password';
  var answer = prompt('what is the password?');
  if (answer === password) {
    console.log('you\'re in!')
    break;
  }
  attempts += 1;
} while (attempts < 3);
