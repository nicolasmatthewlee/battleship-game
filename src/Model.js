import { Gameboard } from './Gameboard';

class Model {
  constructor() {
    this.playerBoard = new Gameboard(6);
    this.enemyBoard = new Gameboard(6);

    this.shipLengths = [4, 3, 2, 4, 5];
  }
}

export { Model };
