const { callback3 } = require("../callback3");
const cards = require("../data/cards.json");

callback3("ghnb768", cards)
  .then((cards) => console.log(cards))
  .catch((error) => console.log(error));
