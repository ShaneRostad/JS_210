var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

// Main execution function used to build the classRecords object
function generateClassRecordSummary(scores) {
  var classRecords = {
    studentGrades: [],
    exams: [],
  }
  classRecords.studentGrades = calculateStudentGrades(scores);
  classRecords.exams = ExamStats(scores);
  return classRecords;
}

// build the array of studentGrades by iterating through each student
function calculateStudentGrades(scores) {
  var studentFinalGrades = [];
  Object.keys(scores).forEach(function(student) {
    studentFinalGrades.push(calculateOverallGrade(scores[student]));
  })
  return studentFinalGrades;
}

// calculate the individual student's grade score and return formatted value
function calculateOverallGrade(student) {
  var averageExamScore = calculateExamAverage(student.scores.exams);
  var totalExerciseScore = calculateTotalExerciseScore(student.scores.exercises);
  var finalPercentScore = calculateFinalPercentScore(averageExamScore, totalExerciseScore)
  var letterGrade = calculateLetterGrade(finalPercentScore);
  var returnGrade = `${finalPercentScore} (${letterGrade})`;
  console.log(returnGrade);
  return returnGrade;
}

function calculateExamAverage(grades) {
  return grades.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }) / grades.length;
}

function calculateTotalExerciseScore(grades) {
  return grades.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });
}

// calculate Final grade by applying recommended weights to calculated scores
function calculateFinalPercentScore(examScore, exerciseScore) {
  return Math.round((examScore * .65) + (exerciseScore * .35));
}

function calculateLetterGrade(score) {
  if (score > 93) {
    return 'A';
  } else if (score < 93 && score >= 85) {
    return 'B'
  } else if (score < 85 && score >= 77) {
    return 'C'
  } else if (score < 77 && score >= 69) {
    return 'D'
  } else if (score < 69 && score >= 60) {
    return 'E'
  } else if (score < 59) {
    return 'F'
  };
}

// iterate through each student
// build an array of scores for each exam
// build an object for each exam containing desired stats
// push each object into an array
// assign final array to `exams`

// build an array of Objects containing the desired statistics for each exam
function ExamStats(studentScores) {
  var exams = buildExamArrays(studentScores);
  var examStats = calculateExamStats(exams);
  return examStats;
}

// Build an array of all scores for each exam
function buildExamArrays(studentScores) {
  var numberOfExams = 4;
  var i;
  var exams = [];
  for (i = 0; i < numberOfExams; i += 1) {
    var exam = [];
    Object.keys(studentScores).forEach(function(student) {
      exam.push(studentScores[student].scores.exams[i]);
    })
    exams.push(exam);
  }
  return exams;
}

// calculate average, max, and minimum for each array
// then build an Array containing an Object with said stats for each exam
function calculateExamStats(exams) {
  var examStats = [];
  var average;
  var minimum;
  var maximum;
  exams.forEach(function (exam) {
    average = calculateExamAverage(exam);
    minimum = Math.min(...exam);
    maximum = Math.max(...exam);
    stats = {average: average, minimum: minimum, maximum: maximum};
    examStats.push(stats);
  })
  return examStats;
}

// print the return value to the console to check for validity
console.log(generateClassRecordSummary(studentScores));
