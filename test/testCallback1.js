const callback1 = require("../callback1");
const boards = require("../data/boards.json");

callback1("mcu453ed", boards, (error, data) => {
  if (error) console.log(error);
  else console.log(data);
});
