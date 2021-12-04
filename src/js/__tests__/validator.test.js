import Validator from '../validator';

test('not number', () => {
  expect(() => new Validator(null)).toThrowError(new Error('Элемент не существует'));
});

test.each([
  ['4532656374904488', true],
  ['4532656374904588', false],
  ['4532776467122481121', true],
])(('should be valid'), (input, expected) => {
  expect(new Validator(input).second()).toBe(expected);
});
