function asciiValue(str) {
    answer = 0;
    for (var i = 0; i < str.length; i += 1) {
        answer += str[i].charCodeAt(0);
    }
    console.log(answer);
}

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   //
