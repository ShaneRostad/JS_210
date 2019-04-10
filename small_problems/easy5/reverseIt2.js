function reverseWords(string) {
  var words = string.split(' ');
  var newWords = [];
  var i;

  for (i = 0; i < words.length; i += 1) {
    if (words[i].length >= 5) {
      newWords.push(words[i].split('').reverse().join(''));
    } else {
      newWords.push(words[i]);
    }
  }
  console.log(newWords.join(' '))

}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');           
