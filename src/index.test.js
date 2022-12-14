import { Ship } from './index.js';

test('checks if Ship(2,2,true).isSunk returns true', () => {
  expect(new Ship(2, 2, true).isSunk()).toBe(true);
});

test('checks if Ship(3,2,false).isSunk returns false', () => {
  expect(new Ship(3, 2, false).isSunk()).toBe(false);
});
