import { Ship, Gameboard } from './index.js';

test('checks if Ship(2,2,true).isSunk returns true', () => {
  expect(new Ship(2, 2, true).isSunk()).toBe(true);
});

test('checks if Ship(3,2,false).isSunk returns false', () => {
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
