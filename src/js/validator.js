export default class Validator {
  constructor(number) {
    if (!number) {
      throw new Error('Элемент не существует');
    } else {
      this.number = Array.from(number, Number);
    }
  }

  first() {
    for (let i = 0; i < this.number.length; i += 2) {
      if (this.number.length % 2) {
        this.number[i + 1] *= 2;
      } else {
        this.number[i] *= 2;
      }
      if (this.number[i] > 9) {
        this.number[i] -= 9;
      }
    }
  }

  second() {
    this.first();
    const total = this.number.reduce((sum, current) => sum + current, 0);
    return !(total % 10);
  }
}
