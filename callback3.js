//Problem 3:  Write a function that will return all cards that belong to a particular list based on the listID that is passed to it from the given data in cards.json. Then pass control back to the code that called it by using a callback function.

function callback3(listId, cards, callback) {
  setTimeout(() => {
    let data = cards[listId];
    if (data) {
      callback(null, data);
    } else {
      let error = new Error("Invalid ID");
      callback(error);
    }
  }, 2 * 1000);
}

module.exports = callback3;
