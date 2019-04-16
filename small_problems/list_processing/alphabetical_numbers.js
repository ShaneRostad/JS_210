function alphabeticNumberSort(array) {
  var NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
                     'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
                     'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var newArr = array.sort(function (a, b) {
    var nameA = NUMBER_WORDS[a];
    var nameB = NUMBER_WORDS[b];
    if (nameA < nameB) {
      return -1;
    } else if (nameA < nameB) {
      return 1;
    } else {
      return 0;
    };
  });
  console.log(newArr);
}

alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
