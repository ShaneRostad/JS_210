function averageGrade(first, second, third) {
  return ((first + second + third) / 3)
}

function studentGrade(first, second, third) {
  var num = averageGrade(first, second, third);

  switch (true) {
    case (num >= 90):
      console.log('A');
      break;
    case (num >= 70 && num < 90):
      console.log('B');
      break;
    case (num >= 50 && num < 70):
      console.log('C');
      break;
    case (num < 50):
      console.log('F');
      break;
  }
}

studentGrade(91, 83, 85); // => 'B'
