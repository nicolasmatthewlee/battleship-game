class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // event binding
    this.view.bindPlayButton(this.handlePlayButtonClicked.bind(this));
    this.view.bindContinueButton(this.handleContinueButtonClicked.bind(this));
  }

  handlePlayButtonClicked() {
    this.view.displayPlaceShips(
      this.model.playerBoard.ships,
      this.model.playerBoard
    );
  }

  handleContinueButtonClicked() {
    this.view.displayAttack(this.model.playerBoard, this.model.enemyBoard);
  }
}

export { Controller };
