function stringy(num) {
    newStr = '';
    for (var i = 1; i <= num; i += 1) {
        if (i % 2 === 1 || i === 1) {
            newStr += '1';
        } else {
            newStr += '0';
        }
    }
    console.log(newStr);
}


stringy(9); // 101010
