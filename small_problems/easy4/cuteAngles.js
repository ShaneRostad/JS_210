function dms(number) {
  var DEGREE = '\xBO';
  var MINUTES_PER_DEGREE = 60;
  var SECONDS_PER_DEGREE = 3600;

  var degreesInt = Math.floor(number);
  var minutes = Math.floor(number - degreesInt) * MINUTES_PER_DEGREE;
  var seconds = Math.floor((number - degreesInt) - (minutes / MINUTES_PER_DEGREE)) * SECONDS_PER_DEGREE);
  return String(degreesInt) + DEGREE + padZeroes(minutes) + "'" + padZeroes(seconds) + '""';
}

function padZeroes(number) {
  var numString = String(number);
  return numString.length < 2 ? ('0' + numString) : numString;
  
}
