const callback3 = require("../callback3");
const cards = require("../data/cards.json");

callback3("ghnb768", cards, (error, data) => {
  if (error) console.log(error);
  else console.log(data);
});
