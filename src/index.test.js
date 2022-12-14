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

test('checks if Gameboard.getShipOccupancy returns correct coordinates with vertical orientation', () => {
  expect(new Gameboard(5).getShipOccupancy(3, 0, 0, true)).toEqual([
    [0, 0],
    [1, 0],
    [2, 0]
  ]);
});

test('checks if Gameboard.getShipOccupancy returns correct coordinates with horizontal orientation', () => {
  expect(new Gameboard(5).getShipOccupancy(3, 0, 0, false)).toEqual([
    [0, 0],
    [0, 1],
    [0, 2]
  ]);
});

test('checks if Gameboard.occupancyIsValid returns invalid for out of bounds when coordinate is out of bounds (x too low)', () => {
  expect(new Gameboard(10).occupancyIsValid([[-1, 0]])).toBe(false);
});

test('checks if Gameboard.occupancyIsValid returns invalid for out of bounds when coordinate is out of bounds (x too large)', () => {
  expect(new Gameboard(10).occupancyIsValid([[10, 0]])).toBe(false);
});

test('checks if Gameboard.occupancyIsValid returns invalid for out of bounds when coordinate is out of bounds (y too low)', () => {
  expect(new Gameboard(10).occupancyIsValid([[0, -1]])).toBe(false);
});

test('checks if Gameboard.occupancyIsValid returns invalid for out of bounds when coordinate is out of bounds (y too large)', () => {
  expect(new Gameboard(10).occupancyIsValid([[0, 10]])).toBe(false);
});

test('checks if Gameboard.occupancyIsValid returns invalid for out of bounds when all coordinates are in-bounds except one', () => {
  expect(
    new Gameboard(10).occupancyIsValid([
      [8, 0],
      [9, 0],
      [10, 0]
    ])
  ).toBe(false);
});

test('checks if Gameboard.occupancyIsValid returns invalid for occupied space', () => {
  let occupiedBoard = new Gameboard(10);
  occupiedBoard.grid[0][0] = 1;
  expect(
    occupiedBoard.occupancyIsValid([
      [0, 0],
      [0, 1],
      [0, 2]
    ])
  ).toBe(false);
  // need to implement after have created method for filled occupancy
});

test('checks if Gameboard.occupancyIsValid returns valid for in bounds and non-occupied space', () => {
  expect(
    new Gameboard(10).occupancyIsValid([
      [0, 0],
      [0, 1],
      [0, 2]
    ])
  ).toBe(true);
});

test('checks if Gameboard.placeShip correctly places a vertical ship on grid', () => {
  let placedBoard = new Gameboard(4);
  placedBoard.placeShip(0, 0, 3, true, 1);
  expect(placedBoard.grid).toEqual([
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 0]
  ]);
});

test('checks if Gameboard.placeShip correctly places a horizontal ship on grid', () => {
  let placedBoard = new Gameboard(4);
  placedBoard.placeShip(0, 0, 3, false, 2);
  expect(placedBoard.grid).toEqual([
    [2, 2, 2, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]);
});

test('checks if Gameboard.placeShip adds new ship to Gameboard.ships', () => {
  let placedBoard = new Gameboard(4);
  placedBoard.placeShip(0, 0, 3, false, 1);
  expect(placedBoard.ships).toEqual([new Ship(3)]);
});

test('checks if Gameboard.receiveAttack correctly updates grid on hit', () => {
  let placedBoard = new Gameboard(4);
  placedBoard.placeShip(0, 0, 3, false, 1);
  placedBoard.receiveAttack(0, 0);
  expect(placedBoard.grid).toEqual([
    ['hit', 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]);
});

test('checks if Gameboard.receiveAttack correctly updates grid on miss', () => {
  let placedBoard = new Gameboard(4);
  placedBoard.placeShip(0, 0, 3, false, 1);
  placedBoard.receiveAttack(2, 2);
  expect(placedBoard.grid).toEqual([
    [1, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 'miss', 0],
    [0, 0, 0, 0]
  ]);
});
