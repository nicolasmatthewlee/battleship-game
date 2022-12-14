import { Ship, Gameboard } from './index.js';

test('checks if Ship.isSunk returns true when hits=length', () => {
  expect(new Ship(2, 2, true).isSunk()).toBe(true);
});

test('checks if Ship.isSunk returns false when hits<length', () => {
  expect(new Ship(3, 2, false).isSunk()).toBe(false);
});

test('checks if Grid(10).grid returns a 10x10 zero array', () => {
  expect(new Gameboard(10).grid).toEqual(
    Array(10)
      .fill()
      .map(() => Array(10).fill(0))
  );
});

test('checks if Grid(5).grid returns a 5x5 zero array', () => {
  expect(new Gameboard(5).grid).toEqual(
    Array(5)
      .fill()
      .map(() => Array(5).fill(0))
  );
});

test('checks if Gameboard.getShipSpace returns correct coordinates with vertical orientation', () => {
  expect(new Gameboard(5).getShipOccupancy(3, 0, 0, true)).toEqual([
    [0, 0],
    [1, 0],
    [2, 0]
  ]);
});

test('checks if Gameboard.getShipSpace returns correct coordinates with horizontal orientation', () => {
  expect(new Gameboard(5).getShipOccupancy(3, 0, 0, false)).toEqual([
    [0, 0],
    [0, 1],
    [0, 2]
  ]);
});
