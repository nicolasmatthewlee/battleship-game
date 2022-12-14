import { Ship } from './index.js';

test('checks if Ship(2,1,false) returns {length:2, hits:1, sunk:false', () => {
  expect(Ship(2, 1, false)).toEqual({
    length: 2,
    hits: 1,
    sunk: false
  });
});
