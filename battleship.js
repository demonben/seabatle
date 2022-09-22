const view = {
  displayMessage: function (msg) {
    const messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  displayHit: function (location) {
    const field = document.getElementById(location);
    field.setAttribute("class", "hit");
  },
  displayMiss: function (location) {
    const field = document.getElementById(location);
    field.setAttribute("class", "miss");
  },
};

const model = {
  boardSize: 7,
  numShips: 3,
  shipsSunk: 0,
  shipLength: 3,
  ships: [
    { locations: ["06", "16", "26"], hits: ["", "", ""] },
    { locations: ["24", "34", "44"], hits: ["", "", ""] },
    { locations: ["10", "11", "12"], hits: ["", "", ""] },
  ],
  fire: function (guess) {
    for (let i = 0; i < this.ships.length; i++) {
      const ship = this.ships[i];
      const index = ship.locations.indexOf(guess);
      if (index >= 0) {
        ship.hits[index] = "hit";
        view.displayHit(guess);
        view.displayMessage("HIT!");
        if (this.isSunk(ship)) {
          this.shipsSunk++;
          view.displayMessage("You sank my battleship");
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage("You missed");
    return false;
  },
  isSunk: function (ship) {
    for (let i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] != "hit") {
        return false;
      }
    }
    return true;
  },
};

const controller = {
  guess: 0,
  processGuess: function (guess) {
    let location = parseGuess(guess);
    if (location) {
      this.guess++;
      let hit = model.fire(location);
      if (hit && model.shipsSunk === model.numShips) {
        view.displayMessage(
          "You sank all my battleships, in" + this.guess + "guesses"
        );
      }
    }
  },
};

function parseGuess(guess) {
  const alphabet = ["A", "B", "C", "D", "E", "F", "G"];
  if (guess === null || guess.length !== 2) {
    alert("Oops, please enter valid coordinate");
  } else {
    let firstChar = guess.charAt(0);
    let row = alphabet.indexOf(firstChar);
    let column = guess.charAt(1);

    if (isNaN(row) || isNaN(column)) {
      alert("Oops, that isn't no the board");
    } else if (
      row < 0 ||
      row > model.boardSize ||
      column < 0 ||
      column > model.boardSize
    ) {
      alert("Oops, that off the board");
    } else {
      return row + column;
    }
  }
  return null;
}
//test
// view.displayMiss("00");
// view.displayHit("34");
// view.displayMiss("55");
// view.displayHit("12");
// view.displayMiss("25");
// view.displayHit("26");

// view.displayMessage("bla bla");

// model.fire("12");
// model.fire("11");
// model.fire("10");

// model.fire("06");
// model.fire("16");
// model.fire("26");

// model.fire("53");

// console.log(parseGuess("A0"));
// console.log(parseGuess("B6"));
// console.log(parseGuess("G3"));
// console.log(parseGuess("H0"));
// console.log(parseGuess("A7"));

// controller.processGuess("A0");
// controller.processGuess("A6");
// controller.processGuess("B6");
// controller.processGuess("C6");
// controller.processGuess("C4");
// controller.processGuess("D4");
// controller.processGuess("E4");
// controller.processGuess("B0");
// controller.processGuess("B1");
// controller.processGuess("B2");
