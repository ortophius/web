class Calculator {
  constructor() {
    this.lastValidOperand = "";
    this.input = document.getElementById('input');
    this.memory = document.getElementById('memory');
    this.buttons = document.getElementById('buttons');
    this.setupListeners();
    this.resetMemory();
    this.input.focus();
  }

  save(operand, operation) {
    this.previousOperand = parseFloat(operand);
    this.operation = operation;
    this.memory.innerHTML = `${operand} ${operation}`;
  }

  resetMemory() {
    this.previousOperand = null;
    this.operation = null;
    this.memory.innerHTML = "";
  }

  fullReset() {
    this.resetMemory();
    this.input.value = "";
  }

  setupListeners() {
    document.addEventListener('keydown', this.processKeyPress.bind(this));
    this.input.addEventListener('paste', this.processInput.bind(this));
    this.input.addEventListener('input', this.processInput.bind(this));
    this.buttons.addEventListener('click', this.onButtonInput.bind(this));
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

  processKeyPress(e) {
    if (e.target !== this.input) return;
    console.log(e);
    if (e.which === 13 && this.previousOperand) {
      this.input.value = this.compute(this.previousOperand, this.operation, this.input.value);
      this.resetMemory();
    }
    if (e.which === 27) {
      this.fullReset();
    };
  }

  processInput() {
    const isOperator = /^[0-9]+[\/\*\+\-\=]/.test(input.value);
    this.input.value = this.filterInput(this.input.value);
    const regex = /^[\-]?[0-9\.]+[\/\*\+\-\=]/;
    console.log(regex.exec(input.value));
    for (let nextPart = regex.exec(input.value); nextPart !== null; nextPart = regex.exec(input.value)) {
      const operand = nextPart[0].slice(0, -1);
      const operation = nextPart[0].slice(-1);

      if (operation === "=") {
        if (!this.previousOperand) this.input.value = operand;
        else this.input.value = this.compute(this.previousOperand, this.operation, operand);
        this.resetMemory();
        continue;
      }

      console.log(operand, operation);

      if (this.previousOperand) this.save(this.compute(this.previousOperand, this.operation, operand), operation);
      else this.save(operand, operation);

      this.input.value = this.input.value.slice(nextPart[0].length);
    }
  }

  onButtonInput(e) {
    if (e.target.tagName !== 'BUTTON') return;
    const button = e.target;
    const input = this.input;

    switch (button.getAttribute('data-operation')) {
      case "ac":
        this.fullReset();
        break;
      case "del":
        input.value = input.value.slice(0, -1);
        this.processInput();
        break;
      case "sqrt":
        input.value = this.compute(input.value, "sqrt");
        break;
      case "square":
        input.value = this.compute(input.value, "square");
        break;
      default:
        input.value += button.innerHTML;
        this.processInput();
    }

  }

  compute(leftOperand, operation, rightOperand = 0) {
    rightOperand = parseFloat(rightOperand);
    leftOperand = parseFloat(leftOperand);
    
    switch (operation) {
      case "+":
        return parseFloat((leftOperand + rightOperand).toFixed(10));
      case "-":
        return parseFloat((leftOperand - rightOperand).toFixed(10));
      case "/":
        return parseFloat((leftOperand / rightOperand).toFixed(10));
      case "*":
        return parseFloat((leftOperand * rightOperand).toFixed(10));
      case "sqrt":
        return parseFloat(Math.sqrt(leftOperand).toFixed(10));
      case "square":
        return parseFloat((leftOperand ** 2).toFixed(10));
    }
  }
}

new Calculator();