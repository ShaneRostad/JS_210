function cleanUp(str) {
    regex = /[a-z]/;
    newStr = '';
    answer = '';

    for (var i = 0; i < str.length; i += 1) {
        if (!!str[i].match(regex)) {
            newStr += str[i];
        } else {
            newStr += ' ';
        }
    }

    for (var n = 0; n < newStr.length; n += 1) {
        if (newStr[n] === ' ' && newStr[n + 1] === ' ') {
            continue;
        } else {
            answer += newStr[n];
        }
    }
    console.log(answer);
}

cleanUp("---what's my +*& line?");
