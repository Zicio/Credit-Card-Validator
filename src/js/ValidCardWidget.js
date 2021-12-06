import Determiner from './determiner';
import Validator from './validator';

export default class ValidCardWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup() {
    return `
   <ul class="cards">
   <li><img class="card card__visa" src="./img/Visa.png" alt="Visa"></li>
   <li><img class="card card__master" src="./img/MasterCard.png" alt="Mastercard"></li>
   <li><img class="card card__amex" src="./img/American Express.png" alt="American Express"></li>
   <li><img class="card card__mir" src="./img/MIR.jpg" alt="MIR"></li>
   <li><img class="card card__jcb" src="./img/JCB.png" alt="JCB"></li>
 </ul>
 <form class="check">
   <input class="check__field" id="check" type="number" placeholder="Credit card number" min="16" required="">
   <button class="check__button" type="submit">Click to Validate</button>
 </form>
 <p class="result success">Валидация успешна</p>
 <p class="result failure">Валидация неуспешна</p>
   `;
  }

  static get submitSelector() {
    return '.check__button';
  }

  static get successSelector() {
    return '.success';
  }

  static get failureSelector() {
    return '.failure';
  }

  static get inputSelector() {
    return '.check__field';
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    const submit = this.parentEl.querySelector(this.constructor.submitSelector);
    submit.addEventListener('click', (e) => this.onSubmit(e));
  }

  onSubmit(e) {
    e.preventDefault();
    const inputEl = this.parentEl.querySelector(this.constructor.inputSelector);
    const resultSuccess = this.parentEl.querySelector(this.constructor.successSelector);
    const resultFailure = this.parentEl.querySelector(this.constructor.failureSelector);
    const validator = new Validator(inputEl.value);
    if (validator.second()) {
      resultSuccess.classList.add('success-active');
    } else {
      resultFailure.classList.add('failure-active');
    }
  }
}
