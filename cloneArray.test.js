const cloneArray = require('./cloneArray');

test('properly clones array', () => {
  const array = [1, 2, 3];
  expect(cloneArray(array)).toEqual(array);
  expect(cloneArray(array)).not.toBe(array);

  //won't work since array same elements but different memory addresses
  expect(cloneArray(array)).toBe(array);
});
