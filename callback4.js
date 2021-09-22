// Problem 4: Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.

//     Get information from the Thanos boards
//     Get all the lists for the Thanos board
//     Get all cards for the Mind list simultaneously

const callback1 = require("./callback1");

const callback2 = require("./callback2");

const callback3 = require("./callback3");

function callback4(boards, cards, lists) {
  setTimeout(() => {
    boards.filter((board) => {
      if (board.name === "Thanos") {
        let tBoards = [];
        tBoards.push(board);
        callback1(board.id, tBoards, (error, data) => {
          if (error) {
            console.log(error);
          } else {
            let tData = [];
            tData.push(data);
            tData.filter((tDataId) => {
              callback2(tDataId.id, lists, (error, data) => {
                if (error) {
                  console.log(error);
                } else {
                  data.filter((tDataName) => {
                    if (tDataName.name === "Mind") {
                      callback3(tDataName.id, cards, (error, data) => {
                        if (error) {
                          console.log(error);
                        } else {
                          data.forEach((tData) => {
                            console.log(tData);
                          });
                        }
                      });
                    }
                  });
                }
              });
            });
          }
        });
      }
    });
  }, 2 * 1000);
}

module.exports = { callback4 };
