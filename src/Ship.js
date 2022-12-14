class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
    this.placed = false;
  }

  hit() {
    this.hits++;
    if (this.isSunk()) this.sunk = true;
  }

  isSunk() {
    if (this.hits == this.length) return true;
    else return false;
  }
}

export { Ship };
