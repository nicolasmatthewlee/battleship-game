import { Gameboard } from './Gameboard';

class Model {
  constructor() {
    this.playerBoard = new Gameboard(10);
    this.enemyBoard = new Gameboard(10);
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

      this.enemyAttack();

      // if game complete, finish
      const result = this.isGameComplete();
      if (result) {
        this.onGameComplete(result);
        return;
      }

      // callback display
      this.onAttackCycleComplete();
    } else return false;
  }

  enemyAttack() {
    let attackComplete = false;
    while (!attackComplete) {
      let x = this.getRandomInt(this.playerBoard.grid.length);
      let y = this.getRandomInt(this.playerBoard.grid.length);
      if (this.playerBoard.attackIsValid(x, y)) {
        this.playerBoard.receiveAttack(x, y);
        attackComplete = true;
      }
    }
  }

  isGameComplete() {
    console.log(
      this.playerBoard.allShipsSunk(),
      this.enemyBoard.allShipsSunk()
    );
    if (this.playerBoard.allShipsSunk()) return 'failure';
    if (this.enemyBoard.allShipsSunk()) return 'success';
    return false;
  }

  // event binding
  bindOnAttackCycleComplete(handler) {
    this.onAttackCycleComplete = handler;
  }

  bindOnGameComplete(handler) {
    this.onGameComplete = handler;
  }
}

export { Model };
