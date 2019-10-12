class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this._left = min;
      this._right = max;
      this._guess = Math.ceil((this._right + this._left) / 2)
    }

    guess() {
      return this._guess;
    }

    lower() {
      this._right = this._guess;
      this._guess = Math.ceil((this._right + this._left) / 2)
    }

    greater() {
      this._left = this._guess;
      this._guess = Math.ceil((this._right + this._left) / 2);
    }
}

module.exports = GuessingGame;
