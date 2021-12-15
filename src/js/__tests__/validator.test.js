import Validator from '../validator';

test.each([
  ['4532656374904488', true],
  ['4532656374904588', false],
  ['4532776467122481121', true],
  ['1', false],
])(('should be valid'), (input, expected) => {
  expect(new Validator(input).second()).toBe(expected);
});
