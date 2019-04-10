function triangle(num) {
    line = '';
    counter = 1;

    for (var i = 1; i <= num; i += 1) {
        line = '';

        line += ' '.repeat(num - i);
        line += '*'.repeat(i);
        console.log(line);
    }
}

triangle(9);
