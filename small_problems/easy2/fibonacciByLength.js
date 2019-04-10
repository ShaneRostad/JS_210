function findFibonacciIndexByLength(num) {
    var first = 1;
    var second = 1;
    var index = 2;
    var fibonacci;

    do {
        fibonacci = first + second;
        index += 1;
        first = second;
        second = fibonacci;
    } while (String(fibonacci).length < length);

    return index;
}

findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74
