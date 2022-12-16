class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // event binding
    this.view.bindPlayButton(this.handlePlayButtonClicked.bind(this));
    this.view.bindAttackButton(this.handleAttackButtonClicked.bind(this));
    this.view.bindPlayAgainButton(this.handlePlayAgainButtonClicked.bind(this));
    this.view.bindOnPlaceShip(this.onPlaceShip.bind(this));
    this.view.bindOnAllShipsPlaced(this.onAllShipsPlaced.bind(this));

    this.model.playerBoard.bindOnPlaceShip(
      this.handlePlayButtonClicked.bind(this)
    );

    // DELETE THIS
    this.model.placeEnemyShips();
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

  handleAttackButtonClicked() {
    this.view.displayResult(true);
  }

  handlePlayAgainButtonClicked() {
    this.view.displayStart();
  }

  onPlaceShip(coordinates, shipLength) {
    this.model.playerBoard.placeShip(coordinates, shipLength);
  }

  onAllShipsPlaced() {
    this.model.placeEnemyShips();
  }
}

export { Controller };
