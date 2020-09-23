class Calculator {
  constructor() {
    this.lastValidOperand = "";
    this.input = document.getElementById('input');
    this.memory = document.getElementById('memory');
    this.buttons = document.getElementById('buttons');
    this.setupListeners();
  }

  set previousOperand(x) { }

  set currentOperand(val) {
    this.lastValidOperand = val;
    this.input.value = val;
  }

  get currentOperand() {
    return parseFloat(document.getElementById('input').value);
  }

  save(operand, operation) {
    this.previousOperand = operand;
    this.operation = operation;
    this.memory.innerHTML = `${operand} ${operation}`;
  }

  setupListeners() {
    this.input.addEventListener('paste', this.processInput.bind(this));
    this.input.addEventListener('input', this.processInput.bind(this));
    this.buttons.addEventListener('click', this.onButtonInput.bind(this));
  }

  restoreOperand() {
    this.currentOperand = this.lastValidOperand;
  }

  filterInput(inputString) {
    let isDotPermitted = true;
    let isMinusPermitted = true;
    let isOPeratorPermitted = false;
    return inputString
      .replace(/[^0-9\.\/\*\+\-\=\,]/g, '')
      .replace(/\,/g, ".")
      .split("")
      .map(char => {
        if (char === ".") {
          if (!isDotPermitted) return "";
          else isDotPermitted = false;
        }

        if (/[\/\*\+\=]/.test(char)) {
          if (!isOPeratorPermitted) return "";
          else isOPeratorPermitted = false;
        }

        if (char === "-") {
          if (!isOPeratorPermitted && !isMinusPermitted) return "";
          if (!isOPeratorPermitted && isMinusPermitted) isMinusPermitted = false;
          if (isOPeratorPermitted) isOPeratorPermitted = false;
        }

        if (/[0-9\.]/.test(char)) {
          isOPeratorPermitted = true;
          isMinusPermitted = true;
        }

        return char;
      })
      .join("");
  }

  processInput() {
    const isOperator = /^[0-9]+[\/\*\+\-\=]/.test(input.value);
    this.input.value = this.filterInput(this.input.value);
  }

  onButtonInput(e) {
    if (e.target.tagName !== 'BUTTON') return;

  }
}

new Calculator();