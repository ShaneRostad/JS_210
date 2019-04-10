input = parseInt(prompt('Please enter an integer greater than 0:'), 10);
factor = prompt('Enter "s" to compute the sum, or "p" to compute the product.');

if (factor === 's') {
    var answer = 0;
    for (var i = 1; i <= input; i += 1) {
        answer += i;
    }

    console.log(`The sum of the integers between 1 and ${input} is ${answer}`)
} else if (factor === 'p'){
    var answer = 1;
    for (var i = 1; i <= input; i += 1) {
        answer *= i;
    }
    console.log(`The product of the integers between 1 and ${input} is ${answer}`);
}
