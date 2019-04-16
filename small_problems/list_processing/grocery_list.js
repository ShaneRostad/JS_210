function buyFruit(list) {
  items = [];
  list.forEach(function (item) {
    var times = item[1];
    for (i = 0; i < times; i += 1) {
      items.push(item[0]);
    }
  });
  return items;
}




console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
