//Problem 1: Write a function that will return a particular board's information based on the boardID that is passed from the given list of boards in boards.json and then pass control back to the code that called it by using a callback function.

function callback1(boardId, boards, callback) {
  setTimeout(() => {
    let data = boards.find((boardIdData) => boardIdData.id === boardId);
    if (data) {
      callback(null, data);
    } else {
      let error = new Error("Invalid ID");
      callback(error);
    }
  }, 2 * 1000);
}

module.exports = callback1;
