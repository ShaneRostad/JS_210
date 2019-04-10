function getGrade(first, second, third) {
    grade = (first + second + third) / 3;

    if (grade >= 90) {
        console.log('A');
    } else if (grade < 90 && grade >= 80) {
        console.log('B')
    } else if (grade < 80 && grade >= 70) {
        console.log('C');
    } else if (grade < 70 && grade >= 60) {
            console.log('D');
    } else {
        console.log('F');
    }
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
