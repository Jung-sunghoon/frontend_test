class TextManager {
  constructor() {
    this.value = { data: "hello ORUMI!!" };
  }

  getValue() {
    return this.value.data;
  }

  setValue(newValue) {
    this.value = newValue;
  }
}
