import Determiner from './determiner';
import Validator from './validator';

export default class InteractionDOM {
  constructor(element) {
    if (!element) {
      throw new Error('Элемент не существует');
    } else {
      this.element = element;
      this.input = this.element.querySelector('.check__field');
      this.button = this.element.querySelector('.check__button');
      this.card = this.element.querySelectorAll('.card');
      this.success = this.element.querySelector('.success');
      this.failure = this.element.querySelector('.failure');

      this.listenerofInput();
      this.listenerofButton();
    }
  }

  listenerofInput() {
    this.input.addEventListener('input', this.systemSelection.bind(this));
  }

  listenerofButton() {
    this.button.addEventListener('click', this.validation.bind(this));
  }

  systemSelection() {
    if (!this.input.value) {
      for (const elem of this.card) {
        elem.classList.remove('card-inactive');
      }
      return;
    }
    this.success.classList.remove('success-active');
    this.failure.classList.remove('failure-active');
    const determiner = new Determiner(this.input.value);
    if (determiner.check() === null) {
      return;
    }
    for (const elem of this.card) {
      elem.classList.add('card-inactive');
    }
    this.element.querySelector(`.${determiner.check()}`).classList.remove('card-inactive');
  }

  validation(e) {
    e.preventDefault();
    const validator = new Validator(this.input.value);
    if (validator.second()) {
      this.success.classList.add('success-active');
      return;
    }
    this.failure.classList.add('failure-active');
  }
}
