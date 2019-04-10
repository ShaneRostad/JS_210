function swap(string) {
  var i;
  var holder;
  var words = string.split(' ');

  for (i = 0; i < words.length; i += 1) {
    holder = '';
    word = words[i].split('');
    holder += word[0];
    word[0] = word[word.length - 1];
    word[word.length - 1] = holder;
    words[i] = word.join('');
  }

  console.log(words.join(' '));
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
