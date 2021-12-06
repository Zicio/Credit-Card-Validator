import ValidCardWidget from '../ValidCardWidget';

test('should render self', () => {
  document.body.innerHTML = '<div id="container"></div>';
  const container = document.getElementById('container');
  const widget = new ValidCardWidget(container);
  widget.bindToDOM();
  expect(container.innerHTML).toEqual(ValidCardWidget.markup);
});

test.each([
  ['4532656374904488', '.success', 'success-active'],
  ['5138601817396202', '.success', 'success-active'],
  ['372852891978060', '.success', 'success-active'],
  ['4532656374904588', '.success', 'success-failure'],
  ['4532776467122481121', '.failure', 'success-active'],
])(('should be valid'), (number, resultClass, expected) => {
  document.body.innerHTML = '<div id="container"></div>';
  const container = document.getElementById('container');
  const widget = new ValidCardWidget(container);
  widget.bindToDOM();
  const result = container.querySelector(resultClass);
  const input = container.querySelector(ValidCardWidget.inputSelector);
  input.value = number;
  const submit = container.querySelector('.check__button');
  submit.click();
  expect(result.classList.contains(expected));
});
