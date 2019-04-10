function anagram(word, list) {
  wordChars = word.split('');

  return list.filter(function (element) {
    var elementChars = element.split('')
    return isAnagram(wordChars, elementChars)
  });
}


function isAnagram(wordChars, elementChars) {
  var i;
  for (i = 0; i < elementChars.length; i += 1) {
    if (!wordChars.includes(elementChars[i])) {
      return false;
    }
  }
  return true;
}



console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
anagram('listen', ['enlist', 'google', 'inlets', 'banana']);   // [ "enlist", "inlets" ]
