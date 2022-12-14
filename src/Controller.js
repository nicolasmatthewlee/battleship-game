class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // event binding
    this.view.bindPlayButton(this.handlePlayButtonClicked.bind(this));
    this.view.bindContinueButton(this.handleContinueButtonClicked.bind(this));
    this.view.bindAttackButton(this.handleAttackButtonClicked.bind(this));
    this.view.bindPlayAgainButton(this.handlePlayAgainButtonClicked.bind(this));
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

  handleAttackButtonClicked() {
    this.view.displayResult(true);
  }

  handlePlayAgainButtonClicked() {
    this.view.displayStart();
  }
}

export { Controller };
