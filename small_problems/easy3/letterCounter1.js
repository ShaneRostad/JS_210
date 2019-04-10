function wordSizes(string) {
  newObj = {};
  words = string.split(' ');
  var i;
  for (i = 0; i < words.length; i += 1) {
    if (newObj[words[i].length] === undefined) {
      newObj[words[i].length] = 1;
    } else {
      newObj[words[i].length] += 1;
     }
  }
  console.log(newObj);
}




wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
