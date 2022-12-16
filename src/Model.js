import { Gameboard } from './Gameboard';
import { Ship } from './Ship';

class Model {
  constructor() {
    this.playerBoard = new Gameboard(6);
    this.enemyBoard = new Gameboard(6);
  }
}

export { Model };
