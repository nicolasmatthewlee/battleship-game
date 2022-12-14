import './reset.css';

class View {
  constructor() {
    this.displayStart();
  }

  displayStart() {
    const body = document.querySelector('body');
    const titleLabel = this.createElement('div', 'title-label', 'Battleship');
    const playButton = this.createElement('button', 'play-button', 'Play');
    body.append(titleLabel, playButton);
  }

  createElement(type, className, content) {
    const element = document.createElement(type);
    element.setAttribute('class', className);
    element.textContent = content;
    return element;
  }
}

export { View };
