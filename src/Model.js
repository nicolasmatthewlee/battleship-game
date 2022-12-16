import { Gameboard } from './Gameboard';

class Model {
  constructor() {
    this.playerBoard = new Gameboard(8);
    this.enemyBoard = new Gameboard(8);
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  placeFleet(board) {
    for (let s of board.ships) {
      while (s.placed == false) {
        // 1. get random valid start point and calculate coordinates
        let x;
        let y;
        let coordinates;

        let vertical = this.getRandomInt(2);
        if (vertical) {
          x = this.getRandomInt(board.grid.length - s.length);
          y = this.getRandomInt(board.grid.length);
          coordinates = Array.from(Array(s.length).keys()).map((n) => [
            x + n,
            y
          ]);
        } else {
          x = this.getRandomInt(board.grid.length);
          y = this.getRandomInt(board.grid.length - s.length);
          coordinates = Array.from(Array(s.length).keys()).map((n) => [
            x,
            y + n
          ]);
        }
        // 2. place ship
        board.placeShip(coordinates, s.length, false);
      }
    }
  }

  evaluateTarget(x, y, board) {
    if (board.attackIsValid(x, y)) {
      board.receiveAttack(x, y);

      // callback
      this.onAttackCycleComplete();
    } else return false;
  }

  // event binding
  bindOnAttackCycleComplete(handler) {
    this.onAttackCycleComplete = handler;
  }
}

export { Model };
