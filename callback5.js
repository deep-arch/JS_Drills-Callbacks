// Problem 5: Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.

//     Get information from the Thanos boards
//     Get all the lists for the Thanos board
//     Get all cards for the Mind and Space lists simultaneously

const { callback1 } = require("./callback1");

const { callback2 } = require("./callback2");

const { callback3 } = require("./callback3");


function callback5(boards, cards, lists) {
  boards.filter((board) => {
    if (board.name === "Thanos") {
      let tBoards = [];
      tBoards.push(board);
      setTimeout(() => {
        callback1(board.id, tBoards)
          .then((boardId) => console.log(boardId))
          .catch((error) => console.log(error));
      }, 2 * 1000);
      setTimeout(() => {
        callback2(board.id, lists)
          .then((lists) => {
            console.log(lists);
            lists.filter((list) => {
              if (list.name === "Mind" || list.name === "Space") {
                setTimeout(() => {
                  callback3(list.id, cards)
                    .then((cards) => console.log(cards))
                    .catch((error) => console.log(error));
                }, 0);
              }
            });
          })
          .catch((error) => console.log(error));
      }, 2 * 1000);
    }
  });
}

module.exports = { callback5 };
