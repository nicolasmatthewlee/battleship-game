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

  occupancyIsValid(coordinates) {
    for (let xy of coordinates) {
      // 1. check if coordinates are within the bounds of the grid
      if (xy[0] < 0 || xy[1] < 0) return false;
      if (xy[0] >= this.grid.length || xy[1] >= this.grid.length) return false;

      // 2. check if coordinates are not occupied
      if (this.grid[xy[0]][xy[1]] != 0) return false;
    }
    return true;
  }
}

export { Ship, Gameboard };
