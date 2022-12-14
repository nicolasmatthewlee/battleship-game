class Ship {
  constructor(length, hits, sunk) {
    this.length = length;
    this.hits = hits;
    this.sunk = sunk;
  }

  hit() {
    this.hits++;
  }

  isSunk() {
    if (this.hits == this.length) return true;
    else return false;
  }
}

class Gameboard {
  constructor(n) {
    this.grid = Array(n)
      .fill()
      .map(() => Array(n).fill(0));
  }

  getShipOccupancy(length, x, y, vertical) {
    let coordinates = [];

    if (vertical) {
      for (let i = 0; i < length; i++) {
        coordinates.push([x + i, y]);
      }
    } else {
      for (let i = 0; i < length; i++) {
        coordinates.push([x, y + i]);
      }
    }
    return coordinates;
  }
}

export { Ship, Gameboard };
