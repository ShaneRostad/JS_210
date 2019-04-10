function twice(num) {
    if (String(num).length % 2 === 1) {
        console.log(num * 2);
        return;
    }

    numAsString = String(num);

    if (numAsString.substring(0, numAsString.length / 2) === numAsString.substring(numAsString.length / 2, numAsString.length)) {
        console.log(numAsString);
    } else {
        console.log(num * 2);
    }


}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
