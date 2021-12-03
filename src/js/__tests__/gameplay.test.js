import GamePlay from '../gameplay';
import Field from '../field';

test('not element', () => {
  expect(() => new GamePlay(null, null)).toThrowError(new Error('Элемент не существует'));
});
