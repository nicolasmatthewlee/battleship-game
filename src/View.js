import './reset.css';
import './styles.css';

class View {
  constructor() {
    // declare interface buttons for binding
    this.playButton = this.createElement('button', 'play-button', 'Play');
    this.continueButton = this.createElement(
      'button',
      'continue-button',
      'continue'
    );
    this.attackButton = this.createElement('button', 'attack-button', 'Attack');
    this.playAgainButton = this.createElement(
      'button',
      'play-again-button',
      'Play Again'
    );

    this.displayStart();
  }

  createElement(type, className, content = '') {
    const element = document.createElement(type);
    element.setAttribute('class', className);
    element.textContent = content;
    return element;
  }

  // display methods

  clearDisplay() {
    const body = document.querySelector('body');
    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }
  }

  displayStart() {
    this.clearDisplay();
    const body = document.querySelector('body');
    const titleLabel = this.createElement('div', 'title-label', 'Battleship');
    body.append(titleLabel, this.playButton);
  }

  displayPlaceShips(shipLengths, boardLength) {
    this.clearDisplay();
    const body = document.querySelector('body');
    const titleLabel = this.createElement(
      'div',
      'title-label',
      'Place your ships'
    );
    const shipsContainer = this.createElement('div', 'ships-container');
    for (let l of shipLengths) {
      const ship = this.createElement('div', 'ship');
      ship.style.width = l * 50 + 'px';
      shipsContainer.append(ship);
    }
    const grid = this.createElement('div', 'grid');
    grid.style.gridTemplate = `repeat(${boardLength},1fr) / repeat(${boardLength},1fr)`;
    for (let i = 0; i < boardLength * boardLength; i++) {
      const gridBlock = this.createElement('div', 'grid-block');
      grid.append(gridBlock);
    }
    const rotateButton = this.createElement(
      'button',
      'rotate-button',
      'rotate'
    );
    body.append(
      titleLabel,
      shipsContainer,
      grid,
      rotateButton,
      this.continueButton
    );
  }

  displayAttack(playerBoard, enemyBoard) {
    this.clearDisplay();
    const body = document.querySelector('body');
    const titleLabel = this.createElement(
      'div',
      'title-label',
      'Set attack coordinates'
    );
    const playerGrid = this.createElement('div', 'player-grid');
    for (let i = 0; i < playerBoard.length * playerBoard.length; i++) {
      const gridBlock = this.createElement('div', 'grid-block');
      playerGrid.append(gridBlock);
    }
    const enemyGridNode = this.createElement('div', 'enemy-grid');
    for (let i = 0; i < enemyBoard.length * enemyBoard.length; i++) {
      const gridBlock = this.createElement('div', 'grid-block');
      enemyGridNode.append(gridBlock);
    }
    body.append(titleLabel, playerGrid, enemyGridNode, this.attackButton);
  }

  displayResult(win) {
    this.clearDisplay();
    const body = document.querySelector('body');
    const titleLabel = this.createElement('div', 'title-label', 'result');
    body.append(titleLabel, this.playAgainButton);
  }

  // event binding

  bindPlayButton(handler) {
    this.playButton.addEventListener('click', handler);
  }

  bindContinueButton(handler) {
    this.continueButton.addEventListener('click', handler);
  }

  bindAttackButton(handler) {
    this.attackButton.addEventListener('click', handler);
  }

  bindPlayAgainButton(handler) {
    this.playAgainButton.addEventListener('click', handler);
  }
}

export { View };
