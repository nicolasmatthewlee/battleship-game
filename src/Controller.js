import { Gameboard } from './Gameboard';

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // event binding
    this.view.bindPlayButton(this.handlePlayButtonClicked.bind(this));
    this.view.bindPlayAgainButton(this.handlePlayAgainButtonClicked.bind(this));
    this.view.bindOnPlaceShip(this.onPlaceShip.bind(this));
    this.view.bindOnAllShipsPlaced(this.onAllShipsPlaced.bind(this));
    this.view.bindOnSetAttack(this.handleOnAttack.bind(this));

    this.model.playerBoard.bindOnPlaceShip(
      this.handlePlayButtonClicked.bind(this)
    );
    this.model.bindOnAttackCycleComplete(
      this.handleContinueButtonClicked.bind(this)
    );
    this.model.bindOnGameComplete(this.onGameComplete.bind(this));
  }

  handlePlayButtonClicked() {
    this.view.displayPlaceShips(
      this.model.playerBoard.ships,
      this.model.playerBoard.grid
    );
  }

  handleContinueButtonClicked() {
    this.view.displayAttack(
      this.model.playerBoard.grid,
      this.model.enemyBoard.grid
    );
  }

  handleOnAttack(x, y) {
    this.model.evaluateTarget(x, y, this.model.enemyBoard);
  }

  handlePlayAgainButtonClicked() {
    this.model.playerBoard = new Gameboard(10);
    this.model.playerBoard.bindOnPlaceShip(
      this.handlePlayButtonClicked.bind(this)
    );
    this.model.enemyBoard = new Gameboard(10);
    this.view.displayStart();
  }

  onPlaceShip(coordinates, shipLength) {
    this.model.playerBoard.placeShip(coordinates, shipLength);
  }

  onAllShipsPlaced() {
    this.model.placeFleet(this.model.enemyBoard);
    this.view.displayAttack(
      this.model.playerBoard.grid,
      this.model.enemyBoard.grid
    );
  }

  onGameComplete(result) {
    this.view.displayResult(result);
  }
}

export { Controller };
