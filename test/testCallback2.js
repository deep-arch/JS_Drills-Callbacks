const callback2 = require("../callback2");
const lists = require("../data/lists.json");

callback2("abc122dc", lists, (error, data) => {
  if (error) console.log(error);
  else console.log(data);
});
