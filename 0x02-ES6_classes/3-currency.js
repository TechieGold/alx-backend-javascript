export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  /**
     * This function returns a string representation of Currency.
     *
     * @returns {string} in this format - name (code).
     */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
