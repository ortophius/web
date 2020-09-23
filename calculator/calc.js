class Calculator {
  constructor() {
    this.lastValidOperand = "";
    this.input = document.getElementById('input');
    this.memory = document.getElementById('memory');
    this.buttons = document.getElementById('buttons');
    this.setupListeners();
  }

  set previousOperand(x) {}

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
    let isFloat = false;
    let prevChar = '';
    return inputString
      .replace(/[^0-9\.\/\*\+\-\=]/g, '')
      .split("")
      .map(char => {
        if (char === "." && isFloat) return "";
        if (char === "." && !isFloat) isFloat = true;
        if (/[\/\*\+\=\-]/.test(char)) {
          if (char === "-" && prevChar === "-") return "";
          if (char !== "-" && /[\/\*\+\=\-]/.test(prevChar)) return "";
          isFloat = false;
        }
        prevChar = char;
        return char;
      })
      .join("");
  }

  processInput(e) {
    const input = e.target;
    const isOperator = /^[0-9]+[\/\*\+\-\=]/.test(input.value);
    this.input.value = this.filterInput(this.input.value);
    // if (this.previousOperand !== 0)
    // const isDelete = e.inputType === 'deleteContentBackward';

    // if (!isDigit && !isOperator && input.value !== "") {
    //   this.restoreOperand();
    //   return;
    // }

    // if (isDigit) this.currentOperand = input.value;
    // if (isOperator) {
    //   const i = input.value.search(/[\/\*\+\-\=]/);
    //   if (/^[\-]?[0-9\.]+$/.test(input.value.slice(0, i)))
    // }

  }

  onButtonInput(e) {
    if (e.target.tagName !== 'BUTTON') return;
    
  }
}

new Calculator();