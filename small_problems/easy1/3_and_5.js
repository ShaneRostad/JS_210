function multisum(number) {
    var answer = 0;
    for (var i = 1; i <= number; i += 1) {
        if (i % 3 === 0 || i % 5 === 0) {
            answer += i;
        }
    }
    console.log(answer);
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168
