class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // event binding
    this.view.bindPlayButton(this.handlePlayButtonClicked.bind(this));
    this.view.bindPlayAgainButton(this.handlePlayAgainButtonClicked.bind(this));
    this.view.bindOnPlaceShip(this.onPlaceShip.bind(this));
    this.view.bindOnAllShipsPlaced(this.onAllShipsPlaced.bind(this));

    this.model.playerBoard.bindOnPlaceShip(
      this.handlePlayButtonClicked.bind(this)
    );

    // DELETE THIS
    console.log('DELETE THIS');
    this.model.placeFleet(this.model.playerBoard);
    this.model.placeFleet(this.model.enemyBoard);
    this.view.displayAttack(
      this.model.playerBoard.grid,
      this.model.enemyBoard.grid
    );
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

  handleOnAttack() {
    console.log('attack');
  }

  handlePlayAgainButtonClicked() {
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
}

export { Controller };
