export default class Validator {
  constructor(number) {
    this.number = Array.from(number, Number);
  }

  first() {
    if ((this.number.length - 1) % 2) {
      for (let i = 0; i < this.number.length; i += 2) {
        this.number[i] *= 2;
        if (this.number[i] > 9) {
          this.number[i] -= 9;
        }
      }
    } else {
      for (let i = 1; i < this.number.length; i += 2) {
        this.number[i] *= 2;
        if (this.number[i] > 9) {
          this.number[i] -= 9;
        }
      }
    }
  }

  second() {
    this.first();
    const total = this.number.reduce((sum, current) => sum + current, 0);
    if (total === 0) {
      return false;
    }
    return !(total % 10);
  }
}
