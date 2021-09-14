//Problem 1:  Write a function that will return all cards that belong to a particular list based on the listID that is passed to it from the given data in cards.json. Then pass control back to the code that called it by using a callback function.

function callback3(boardId, cards, callback) {
  setTimeout(() => {
    let data = cards[boardId];
    if (data) {
      callback(null, data);
    } else {
      let err = new Error("Invalid ID");
      callback(err);
    }
  }, 2 * 1000);
}

module.exports = { callback3 };
