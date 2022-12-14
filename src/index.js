function Ship(length, hits, sunk) {
  let hit = () => {
    this.hits++;
  };

  let isSunk = () => {
    if (this.hits == this.length) return true;
    else return false;
  };

  return { length, hits, sunk, hit, isSunk };
}

export { Ship };
