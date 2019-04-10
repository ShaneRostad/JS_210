function crunch(str) {
    var holder;
    var newStr = '';
    for (var i = 0; i < str.length; i += 1) {
        if (str[i] === holder) { continue; }
        newStr += str[i];
        holder = str[i];
    }
    console.log(newStr);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
