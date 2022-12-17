import './reset.css';
import './styles.css';

class View {
  constructor() {
    // declare interface buttons for binding
    this.playButton = this.createElement('button', 'play-button', 'Play');
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
    const playButtonContainer = this.createElement(
      'div',
      'play-button-container'
    );
    playButtonContainer.append(this.playButton);
    body.append(titleLabel, playButtonContainer);
  }

  displayPlaceShips(remainingShips, board) {
    this.clearDisplay();

    let currentShip;
    for (let s of remainingShips) {
      if (s.placed == false) {
        currentShip = s;
      }
    }

    // if all ships placed
    if (!currentShip) {
      this.onAllShipsPlaced();
      return;
    }

    this.placementLength = currentShip.length;
    this.placementVertical = true;

    const body = document.querySelector('body');
    const titleLabel = this.createElement(
      'div',
      'title-label',
      'Place Your Ships'
    );

    const mainContainer = this.createElement('div', 'main-container');
    this.placementGrid = this.createElement('div', 'placement-grid');
    this.placementGrid.style.gridTemplate = `repeat(${board.length},1fr) / repeat(${board.length},1fr)`;
    for (let i = 0; i < board.length * board.length; i++) {
      const gridBlock = this.createElement('div', 'grid-block');
      const x = Math.trunc(i / board.length);
      const y = i % board.length;
      if (board[x][y] != 0) {
        gridBlock.classList.add('occupied');
      }
      gridBlock.setAttribute('data-x', String(x));
      gridBlock.setAttribute('data-y', String(y));
      gridBlock.addEventListener('mouseover', () => {
        this.highlightCoordinates(
          Math.trunc(i / board.length),
          i % board.length,
          board.length
        );
      });
      gridBlock.addEventListener('click', () => {
        let highlightedCoordinates = document.querySelectorAll(
          '.placement-grid>div.active'
        );

        let coordinates = [];
        for (let c of highlightedCoordinates) {
          coordinates.push([Number(c.dataset.x), Number(c.dataset.y)]);
        }
        this.placeShip(coordinates, currentShip.length);
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
    this.placementGrid.append(rotateButton);
    mainContainer.append(this.placementGrid);
    body.append(titleLabel, mainContainer);
  }

  highlightCoordinates(x, y, boardLength) {
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
      'Set Attack Coordinates'
    );
    const boardContainer = this.createElement('div', 'board-container');
    const playerBoard = this.createElement('div', 'player-board');
    const playerBoardLabel = this.createElement(
      'div',
      'board-label',
      'Your Fleet'
    );
    playerBoard.append(playerBoardLabel);
    playerBoard.style.gridTemplate = `repeat(${playerGrid.length},1fr) / repeat(${playerGrid.length},1fr)`;
    for (let i = 0; i < playerGrid.length * playerGrid.length; i++) {
      const gridBlock = this.createElement('div', 'grid-block');
      const x = Math.trunc(i / playerGrid.length);
      const y = i % playerGrid.length;
      if (playerGrid[x][y] == 'miss' || playerGrid[x][y] == 'hit') {
        gridBlock.classList.add(playerGrid[x][y]);
      } else if (playerGrid[x][y] != 0) {
        gridBlock.classList.add('occupied');
      }
      playerBoard.append(gridBlock);
    }
    const enemyBoard = this.createElement('div', 'enemy-board');
    const enemyBoardLabel = this.createElement(
      'div',
      'board-label',
      'Enemy Fleet'
    );
    enemyBoard.append(enemyBoardLabel);
    enemyBoard.style.gridTemplate = `repeat(${playerGrid.length},1fr) / repeat(${playerGrid.length},1fr)`;
    for (let i = 0; i < enemyGrid.length * enemyGrid.length; i++) {
      const gridBlock = this.createElement('div', 'grid-block');
      const x = Math.trunc(i / playerGrid.length);
      const y = i % playerGrid.length;
      if (enemyGrid[x][y] == 'miss' || enemyGrid[x][y] == 'hit') {
        gridBlock.classList.add(enemyGrid[x][y]);
      }
      gridBlock.setAttribute('data-x', String(x));
      gridBlock.setAttribute('data-y', String(y));
      gridBlock.addEventListener('click', () => {
        this.setAttack(x, y);
      });
      enemyBoard.append(gridBlock);
    }
    boardContainer.append(playerBoard, enemyBoard);
    body.append(titleLabel, boardContainer);
  }

  setAttack(x, y) {
    // reset grid
    let placementGridItems = document.querySelectorAll('.enemy-board>div');
    for (let item of placementGridItems) {
      item.classList.remove('active');
    }

    let targetBlock = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    targetBlock.classList.add('active');
    this.onSetAttack(x, y);
  }

  displayResult(result) {
    this.clearDisplay();
    const body = document.querySelector('body');
    const titleLabel = this.createElement('div', 'title-label', result);
    body.append(titleLabel, this.playAgainButton);
  }

  // event binding

  bindPlayButton(handler) {
    this.playButton.addEventListener('click', handler);
  }

  bindPlayAgainButton(handler) {
    this.playAgainButton.addEventListener('click', handler);
  }

  bindOnPlaceShip(callback) {
    this.placeShip = callback;
  }

  bindOnAllShipsPlaced(callback) {
    this.onAllShipsPlaced = callback;
  }

  bindOnSetAttack(callback) {
    this.onSetAttack = callback;
  }
}

export { View };
