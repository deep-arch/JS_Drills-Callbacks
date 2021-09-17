const boards = require("../data/boards.json");
const lists = require("../data/lists.json");
const cards = require("../data/cards.json");
const { callback6 } = require("../callback6");

callback6(boards, cards, lists);
