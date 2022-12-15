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
    this.ships = [null, Ship(5), Ship(4), Ship(3), Ship(2)];
  }

  occupancyIsValid(coordinates) {
    for (let xy of coordinates) {
      if (this.grid[xy[0]][xy[1]] != 0) return false;
    }
    return true;
  }

  placeShip(coordinates, shipNumber) {
    if (this.occupancyIsValid(coordinates)) {
      for (let xy of coordinates) {
        this.grid[xy[0]][xy[1]] = shipNumber;
      }
    }
    this.onPlaceShip();
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

  // event binding
  bindOnPlaceShip(callback) {
    this.onPlaceShip = callback;
  }
}

export { Gameboard };
