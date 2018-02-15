const factorialize = require('./index');

test('factorialize is a function', () => {
  expect(typeof factorialize).toEqual('function');
});

test('factorialize returns the factorial of integer', () => {
  expect(factorialize(5)).toEqual(120);
});

test('factorialize returns the factorial of integer', () => {
  expect(factorialize(10)).toEqual(3628800);
});
