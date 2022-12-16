import { Gameboard } from './Gameboard';
import { Ship } from './Ship';

class Model {
  constructor() {
    this.playerBoard = new Gameboard(8);
    this.enemyBoard = new Gameboard(8);
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  placeEnemyShips() {
    for (let s of this.enemyBoard.ships) {
      while (s.placed == false) {
        // 1. get random valid start point and calculate coordinates
        let x;
        let y;
        let coordinates;

        let vertical = this.getRandomInt(2);
        if (vertical) {
          x = this.getRandomInt(this.enemyBoard.grid.length - s.length);
          y = this.getRandomInt(this.enemyBoard.grid.length);
          coordinates = Array.from(Array(s.length).keys()).map((n) => [
            x + n,
            y
          ]);
        } else {
          x = this.getRandomInt(this.enemyBoard.grid.length);
          y = this.getRandomInt(this.enemyBoard.grid.length - s.length);
          coordinates = Array.from(Array(s.length).keys()).map((n) => [
            x,
            y + n
          ]);
        }
        // 2. place ship
        this.enemyBoard.placeShip(coordinates, s.length, false);
      }
    }

    for (let row of this.enemyBoard.grid) {
      console.log(row);
    }
  }
}

export { Model };
