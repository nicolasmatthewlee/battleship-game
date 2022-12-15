import { Gameboard } from './Gameboard';
import { Ship } from './Ship';

class Model {
  constructor() {
    this.playerBoard = new Gameboard(6);
    this.enemyBoard = new Gameboard(6);

    this.playerShips = [new Ship(4), new Ship(2), new Ship(3)];
  }
}

export { Model };
