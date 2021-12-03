import Field from '../field';

test('not element', () => {
  expect(() => new Field(null)).toThrowError(new Error('Элемент не существует'));
});
