import { Gameboard } from './Gameboard';
import { Ship } from './Ship';

class Model {
  constructor() {
    this.playerBoard = new Gameboard(8);
    this.enemyBoard = new Gameboard(8);
  }
}

export { Model };
