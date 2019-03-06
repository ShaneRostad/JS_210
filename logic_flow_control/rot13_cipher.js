function rot13(string) {
  newString = '';
  for (var i = 0; i < string.length; i += 1) {
    charCode = string.charCodeAt(i)

    if (charCode <= 122 && charCode > 109) {
      newString += String.fromCharCode(charCode - 13);
    } else if (charCode <= 109 && charCode >= 97) {
      newString += String.fromCharCode(charCode + 13);
    } else if (charCode <= 90 && charCode > 77) {
      newString += String.fromCharCode(charCode - 13);
    } else if (charCode <= 77 && charCode >= 65) {
      newString += String.fromCharCode(charCode + 13);
    } else {
      newString += string[i];
    }
  }
  return newString;
}


console.log(rot13('Teachers open the door, but you must enter by yourself.'));
//
// // logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.
