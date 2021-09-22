const callback2 = require("../callback2");
const lists = require("../data/lists.json");

callback2("abc122dc", lists)
  .then((lists) => console.log(lists))
  .catch((error) => console.log(error));
