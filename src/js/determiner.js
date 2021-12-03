export default class Determiner {
  constructor(number) {
    if (!number) {
      throw new Error('Элемент не существует');
    } else {
      this.number = number;
    }
  }

  check() {
    if (this.number.match(/^4/)) {
      return 'card__visa';
    }
    if (this.number.match(/^5[1-5]/)) {
      return 'card__master';
    }
    if (this.number.match(/^3[47]/)) {
      return 'card__amex';
    }
    if (this.number.match(/^2/)) {
      return 'card__mir';
    }
    if (this.number.match(/^35([2-8]?[0-9]?)/)) {
      return 'card__jcb';
    }

    return null;
  }
}
