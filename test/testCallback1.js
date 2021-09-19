const { callback1 } = require("../callback1");
const boards = require("../data/boards.json");

callback1("mcu453ed", boards)
  .then((boards) => console.log(boards))
  .catch((error) => console.log(error));
