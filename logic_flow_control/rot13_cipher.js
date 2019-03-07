function rot13(string) {
  newString = '';
  var LOWER_A = 'a'.charCodeAt();
  var LOWER_M = 'm'.charCodeAt();
  var LOWER_Z = 'z'.charCodeAt();
  var UPPER_A = 'A'.charCodeAt();
  var UPPER_M = 'M'.charCodeAt();
  var UPPER_Z = 'Z'.charCodeAt();

  for (var i = 0; i < string.length; i += 1) {
    charCode = string.charCodeAt(i)

    if ((charCode <= LOWER_Z && charCode > LOWER_M) ||
        (charCode <= UPPER_Z && charCode > UPPER_M)) {
      newString += String.fromCharCode(charCode - 13);
    } else if ((charCode <= LOWER_M && charCode >= LOWER_A) ||
               (charCode <= UPPER_M && charCode >= UPPER_A)) {
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
