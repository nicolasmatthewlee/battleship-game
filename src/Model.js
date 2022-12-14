import { Gameboard } from './Gameboard';

class Model {
  constructor() {
    this.playerBoard = new Gameboard(5);
    this.enemyBoard = new Gameboard(5);
  }
}

export { Model };
