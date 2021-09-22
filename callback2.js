//Problem 2:  Write a function that will return all lists that belong to a board based on the boardID that is passed to it from the given data in lists.json. Then pass control back to the code that called it by using a callback function.

function callback2(boardId, lists, callback) {
  setTimeout(() => {
    let data = lists[boardId];
    if (data) {
      callback(null, data);
    } else {
      let error = new Error("Invalid ID");
      callback(error);
    }
  }, 2 * 1000);
}

module.exports = callback2;
