function acronym(string) {
  var words = string.replace('-', ' ').split(' ');
  var output = '';
  words.forEach(function (word) {
    output += word[0].toUpperCase();
  })
  console.log(output);
}

acronym('Portable Network Graphics');                  // "PNG"
acronym('First In, First Out');                        // "FIFO"
acronym('PHP: HyperText Preprocessor');                // "PHP"
acronym('Complementary metal-oxide semiconductor');    // "CMOS"
acronym('Hyper-text Markup Language');                 // "HTML"
