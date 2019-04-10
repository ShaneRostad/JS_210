function countOccurrences(vehicles) {
  var i;
  var output = {};

  for (i = 0; i < vehicles.length; i += 1) {
    if (output[vehicles[i]] === undefined) {
      output[vehicles[i]] = 1;
    } else {
      output[vehicles[i]] += 1;
    }
  }
  return output;
}


var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

console.log(countOccurrences(vehicles));
