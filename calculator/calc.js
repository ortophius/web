class Calculator {
  constructor() {
    this.lastValidOperand = "";
    this.input = document.getElementById('input');
    this.buttons = document.querySelectorAll('#buttons button');
    this.setupListeners();
    this.fullReset();
    this.input.focus();
  }

  set error(err) {
    const errorDiv = document.getElementById("error");
    if (err) errorDiv.innerHTML = "E";
    else errorDiv.innerHTML = ""
  }

  save(operand, operation) {
    this.previousOperand = operand;
    this.operation = operation;
    document.getElementById("previous-operand").innerHTML = this.previousOperand || "";
    document.getElementById("operation").innerHTML = operation;
    this.input.value = "";
  }

  resetMemory() {
    this.previousOperand = null;
    this.operation = null;
    document.getElementById("previous-operand").innerHTML = "";
    document.getElementById("operation").innerHTML = "";
  }

  fullReset() {
    this.resetMemory();
    this.input.value = "";
    this.error = false;
  }

  setupListeners() {
    document.addEventListener('keydown', this.processKeyPress.bind(this));
    this.input.addEventListener('paste', this.processInput.bind(this));
    this.input.addEventListener('input', this.processInput.bind(this));

    for (let i = 0; i < this.buttons.length; i++) {
      this.buttons[i].addEventListener('click', this.onButtonInput.bind(this));
    }
  }

  // Вообще, это было нужно для фильтрации ввода с клавиатуры
  // Например, с помощью CTRL+V
  // Но потом я почитал условия задания внимательнее...
  // В общем, пусть будет.
  filterInput(inputString) {
    let isDotPermitted = true;
    let isMinusPermitted = true;
    let isOPeratorPermitted = false;
    return inputString
      .replace(/[^0-9\.\/\*\+\-\=\^\,\u221a]/g, '')
      .replace(/\,/g, ".")
      .split("")
      .map(char => {
        if (char === ".") {
          if (!isDotPermitted) return "";
          else isDotPermitted = false;
        }

        if (/[\/\*\+\=\^]/.test(char)) {
          if (!isOPeratorPermitted) return "";
          else isOPeratorPermitted = false;
        }

        if (char === "-") {
          if (!isOPeratorPermitted && !isMinusPermitted) return "";
          if (!isOPeratorPermitted && isMinusPermitted) isMinusPermitted = false;
          if (isOPeratorPermitted) isOPeratorPermitted = false;
        }

        if (char === "√" && !isMinusPermitted) return "";

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

    switch (e.key) {
      case "Enter":
        if (this.previousOperand) {
          this.input.value += "="
          this.processInput();
        }
        break;

      case "Escape":
        this.fullReset();
    }

    const button = document.querySelector(`[data-key~="${e.key}"]`);

    if (button !== null) {
      button.classList.add("active");
      setTimeout(() => button.classList.remove("active"), 1);
    }
  }

  processInput() {
    const input = this.input;
    const operatorRegex = /[\/\*\+\-\=\^\u221a\^]$/;
    const numRegex = /^[\-]?[0-9\.]+/;

    input.value = this.filterInput(input.value);
    this.error = false;

    if (this.readyToReset && !operatorRegex.test(input.value)) {
      input.value = input.value.slice(-1);
      this.readyToReset = false;
    }

    if (operatorRegex.test(input.value)) {
      const operator = input.value.slice(-1);
      const operand = input.value.slice(0, -1);
      if (numRegex.test(input.value)) {
        if (operator === "=") {
          if (!this.operation || !operand) {
            input.value = input.value.slice(0, -1);
            return;
          }
          else if (this.operation === "√") {
            input.value = this.compute(input.value, "sqrt");
            this.resetMemory();
            return;
          }
          else {
            input.value = this.compute(this.previousOperand, this.operation, operand);
            this.resetMemory();
            return;
          }
        }
        else if (operator === "√") {
          input.value = this.compute(operand, "sqrt");
        }
        else if (this.operation === "√") {
          this.save(this.compute(input.value, "sqrt"), operator)
        }
        else if (this.operation) {
          this.save(this.compute(this.previousOperand, this.operation, operand), operator);
        }
        else {
          this.save(operand, operator);
        }
      }
      else if (operator === "√") {
        this.save(null, "√");
      }
    }
  }

  onButtonInput(e) {
    if (e.currentTarget.tagName !== "BUTTON") return;

    const button = e.currentTarget;
    const input = this.input;

    switch (button.getAttribute('data-operation')) {
      case "ac":
        this.fullReset();
        break;

      case "del":
        input.value = input.value.slice(0, -1);
        this.processInput();
        break;

      case "^":
        input.value += "^";
        this.processInput();
        break;

      case "divide":
        input.value += "/";
        this.processInput();

      case "multiply":
        input.value += "*";
        this.processInput();

      default:
        input.value += button.innerHTML;
        this.processInput();
    }

    this.input.focus();
  }

  compute(leftOperand, operation, rightOperand = 0) {
    rightOperand = parseFloat(rightOperand);
    leftOperand = parseFloat(leftOperand);

    const max = 2 ** 53;

    if (Math.abs(rightOperand) > max || Math.abs(leftOperand) > max) {
      this.error = true;
      return "";
    }

    console.log(leftOperand, operation, rightOperand)

    let res;

    switch (operation) {
      case "+":
        res = parseFloat((leftOperand + rightOperand).toFixed(10));
        break;

      case "-":
        res = parseFloat((leftOperand - rightOperand).toFixed(10));
        break;

      case "/":
        res = parseFloat((leftOperand / rightOperand).toFixed(10));
        break;

      case "*":
        res = parseFloat((leftOperand * rightOperand).toFixed(10));
        break;

      case "sqrt":
        if (leftOperand >= 0) res = parseFloat(Math.sqrt(leftOperand).toFixed(10));
        else res = false;
        break;

      case "^":
        res = (leftOperand) ** (rightOperand);
        break;
    }

    if (!res || Math.abs(res) > max) {
      this.fullReset();
      this.error = true;
      return "";
    }

    this.readyToReset = true;
    return res;
  }
}

new Calculator();