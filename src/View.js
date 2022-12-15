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

    this.placementLength = shipLengths[0];
    this.placementVertical = true;

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
    this.placementGrid = this.createElement('div', 'placement-grid');
    this.placementGrid.style.gridTemplate = `repeat(${boardLength},1fr) / repeat(${boardLength},1fr)`;
    for (let i = 0; i < boardLength * boardLength; i++) {
      const gridBlock = this.createElement('div', 'grid-block');
      gridBlock.setAttribute('data-x', String(Math.trunc(i / boardLength)));
      gridBlock.setAttribute('data-y', String(i % boardLength));
      gridBlock.addEventListener('mouseover', () => {
        this.showShip(
          Math.trunc(i / boardLength),
          i % boardLength,
          boardLength
        );
      });
      this.placementGrid.append(gridBlock);
    }
    const rotateButton = this.createElement(
      'button',
      'rotate-button',
      'rotate'
    );
    rotateButton.addEventListener('click', () => {
      this.placementVertical = !this.placementVertical;
    });
    body.append(
      titleLabel,
      shipsContainer,
      this.placementGrid,
      rotateButton,
      this.continueButton
    );
  }

  showShip(x, y, boardLength) {
    // reset grid
    let placementGridItems = document.querySelectorAll('.placement-grid>div');
    for (let item of placementGridItems) {
      item.classList.remove('active');
    }

    let coordinatesToOccupy = [];
    for (let i = 0; i < this.placementLength; i++) {
      if (this.placementVertical) {
        // if placement would be out of bounds
        if (x + i >= boardLength)
          coordinatesToOccupy.push([x - (this.placementLength - i), y]);
        else coordinatesToOccupy.push([x + i, y]);
      } else {
        if (y + i >= boardLength)
          coordinatesToOccupy.push([x, y - (this.placementLength - i)]);
        else coordinatesToOccupy.push([x, y + i]);
      }
    }

    for (let xy of coordinatesToOccupy) {
      let selection = document.querySelector(
        `[data-x="${xy[0]}"][data-y="${xy[1]}"]`
      );
      selection.classList.add('active');
    }
  }

  displayAttack(playerGrid, enemyGrid) {
    this.clearDisplay();
    const body = document.querySelector('body');
    const titleLabel = this.createElement(
      'div',
      'title-label',
      'Set attack coordinates'
    );
    const playerBoard = this.createElement('div', 'player-board');
    playerBoard.style.gridTemplate = `repeat(${playerGrid.length},1fr) / repeat(${playerGrid.length},1fr)`;
    for (let i = 0; i < playerGrid.length * playerGrid.length; i++) {
      const gridBlock = this.createElement('div', 'grid-block');
      playerBoard.append(gridBlock);
    }
    const enemyBoard = this.createElement('div', 'enemy-board');
    enemyBoard.style.gridTemplate = `repeat(${playerGrid.length},1fr) / repeat(${playerGrid.length},1fr)`;
    for (let i = 0; i < enemyGrid.length * enemyGrid.length; i++) {
      const gridBlock = this.createElement('div', 'grid-block');
      enemyBoard.append(gridBlock);
    }
    body.append(titleLabel, playerBoard, enemyBoard, this.attackButton);
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
