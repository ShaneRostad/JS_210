var age = ParseInt(prompt('what is your age?'), 10);
var retireAge = ParseInt(prompt('At what age would you like to retire?'), 10);

var today = new Date;
var year = today.getFullYear();
var retireYear = year + (retireAge - age);

console.log("It's " + year + "You will retire in " + retireYear);
