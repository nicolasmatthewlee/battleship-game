import { Ship } from './Ship';
/*

Gameboard tracks the state of the game with a 2-dimensional grid, 
marking empty spaces with 0 , occupied spaces with an integer 1+ 
corresponding to a ship in Gameboard.ships, hits with 'hit' and misses 
with 'miss'

*/

class Gameboard {
  constructor(n) {
    this.grid = Array(n)
      .fill()
      .map(() => Array(n).fill(0));
    this.ships = [null];
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

  placeShip(x, y, length, vertical, shipNumber) {
    let coordinates = this.getShipOccupancy(length, x, y, vertical);
    if (this.occupancyIsValid(coordinates)) {
      this.ships.push(new Ship(length));
      for (let xy of coordinates) {
        this.grid[xy[0]][xy[1]] = shipNumber;
      }
    }
  }

  receiveAttack(x, y) {
    if (this.grid[x][y] != 0) {
      this.ships[this.grid[x][y]].hit();
      this.grid[x][y] = 'hit';
    } else {
      this.grid[x][y] = 'miss';
    }
  }

  allShipsSunk() {
    for (let ship of this.ships.slice(1)) {
      if (ship.sunk == false) {
        return false;
      }
    }
    return true;
  }
}

export { Gameboard };
