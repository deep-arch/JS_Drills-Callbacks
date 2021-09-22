//Problem 3:  Write a function that will return all cards that belong to a particular list based on the listID that is passed to it from the given data in cards.json. Then pass control back to the code that called it by using a callback function.

function callback3(listId, cards) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = cards[listId];
      if (data) {
        resolve(data);
      } else {
        reject("");
      }
    }, 2 * 1000);
  });
}

module.exports = callback3;
