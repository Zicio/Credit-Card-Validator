import Determiner from '../determiner';

test('not number', () => {
  expect(() => new Determiner(null)).toThrowError(new Error('Элемент не существует'));
});

test.each([
  ['4916417572618487', 'card__visa'],
  ['5504360652122456', 'card__master'],
  ['345582584280276', 'card__amex'],
  ['2200000000000000', 'card__mir'],
  ['3535436455242069', 'card__jcb'],
  ['12345678', null],
])(('should be show true system'), (input, expected) => {
  expect(new Determiner(input).check()).toBe(expected);
});
