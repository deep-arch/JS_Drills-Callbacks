const boards = require("../data/boards.json");
const lists = require("../data/lists.json");
const cards = require("../data/cards.json");
const { callback4 } = require("../callback4");

callback4(boards, cards, lists);
