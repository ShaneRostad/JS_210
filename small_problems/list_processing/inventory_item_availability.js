function transactionsFor(id, transactions) {
  return transactions.filter(function (transaction) {
    if (transaction.id === id) {
      return transaction;
    }
  });
}

function isItemAvailable(item, transactions) {
  var itemTransactions = transactionsFor(item, transactions);
  var stock = 0;

  itemTransactions.forEach(function (transaction) {
    if (transaction.movement === 'in') {
      stock += transaction.quantity;
    } else {
      stock -= transaction.quantity;
    }
  });
  return stock > 0;
}


var transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 15 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
