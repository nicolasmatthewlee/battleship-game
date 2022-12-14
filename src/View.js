import './reset.css';

class View {
  constructor() {
    this.displayStart();
  }

  clearDisplay() {
    const body = document.querySelector('body');
    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }
  }

  displayStart() {
    const body = document.querySelector('body');
    const titleLabel = this.createElement('div', 'title-label', 'Battleship');
    const playButton = this.createElement('button', 'play-button', 'Play');
    body.append(titleLabel, playButton);
  }

  displayPlaceShips(shipLengths, gridLength) {
    const body = document.querySelector('body');
    const titleLabel = this.createElement(
      'div',
      'title-label',
      'Place your ships'
    );
    const shipsContainer = this.createElement('div', 'ships-container');
    for (let l of shipLengths) {
      const ship = this.createElement('div', 'ship');
      ship.style.setAttribute('width', l * 50 + 'px');
      shipsContainer.append(ship);
    }
    const grid = this.createElement('div', 'grid');
    for (let i = 0; i < gridLength * gridLength; i++) {
      const gridBlock = this.createElement('div', 'grid-block');
      grid.append(gridBlock);
    }
    const rotateButton = this.createElement(
      'button',
      'rotate-button',
      'rotate'
    );
    body.append(titleLabel, shipsContainer, grid, rotateButton);
  }

  displayAttack(playerGrid, enemyGrid) {
    const body = document.querySelector('body');
    const titleLabel = this.createElement(
      'div',
      'title-label',
      'Set attack coordinates'
    );
    const playerGridNode = this.createElement('div', 'player-grid');
    for (let i = 0; i < playerGrid.length * playerGrid.length; i++) {
      const gridBlock = this.createElement('div', 'grid-block');
      playerGridNode.append(gridBlock);
    }
    const enemyGridNode = this.createElement('div', 'enemy-grid');
    for (let i = 0; i < enemyGrid.length * enemyGrid.length; i++) {
      const gridBlock = this.createElement('div', 'grid-block');
      enemyGridNode.append(gridBlock);
    }
    body.append(playerGridNode, enemyGridNode);
  }

  createElement(type, className, content = '') {
    const element = document.createElement(type);
    element.setAttribute('class', className);
    element.textContent = content;
    return element;
  }
}

export { View };
