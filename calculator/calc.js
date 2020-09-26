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
    this.previousOperand = parseFloat(operand);
    this.operation = operation;
    document.getElementById("previous-operand").innerHTML = this.previousOperand;
    document.getElementById("operation").innerHTML = operation;
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
    // this.buttons.addEventListener('click', this.onButtonInput.bind(this), true);

    for (let i = 0; i < this.buttons.length; i ++) {
      this.buttons[i].addEventListener('click', this.onButtonInput.bind(this));
    }
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

    switch(e.key) {
      case "Enter":
        if (this.previousOperand) {
          this.input.value = this.compute(this.previousOperand, this.operation, this.input.value);
          this.resetMemory();
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
    this.error = false;
    const isOperator = /^[0-9]+[\/\*\+\-\=]/.test(input.value);
    this.input.value = this.filterInput(this.input.value);
    const regex = /^[\-]?[0-9\.]+[\/\*\+\-\=]/;

    for (let nextPart = regex.exec(input.value); nextPart !== null; nextPart = regex.exec(input.value)) {
      const operand = nextPart[0].slice(0, -1);
      const operation = nextPart[0].slice(-1);

      if (operation === "=") {
        if (!this.previousOperand) this.input.value = operand;
        else this.input.value = this.compute(this.previousOperand, this.operation, operand);
      
        this.resetMemory();
        continue;
      }

      if (this.previousOperand) this.save(this.compute(this.previousOperand, this.operation, operand), operation);
      else this.save(operand, operation);

      this.input.value = this.input.value.slice(nextPart[0].length);
    }
  }

  onButtonInput(e) {
    console.log(e.currentTarget); 
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

      case "sqrt":
        if (input.value === "") return;
        if (this.previousOperand) input.value = this.compute(this.previousOperand, this.operation, input.value);
        input.value = this.compute(input.value, "sqrt");
        this.resetMemory();
        break;

      case "square":
        if (input.value === "") return;
        if (this.previousOperand) input.value = this.compute(this.previousOperand, this.operation, input.value);
        input.value = this.compute(input.value, "square");
        this.resetMemory();
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

  }

  compute(leftOperand, operation, rightOperand = 0) {
    rightOperand = parseFloat(rightOperand);
    leftOperand = parseFloat(leftOperand);

    const max = 2 ** 53;

    if (Math.abs(rightOperand) > max || Math.abs(leftOperand) > max) {
      this.error = true;
      return "";
    }

    let res;
    
    switch (operation) {
      case "+":
        res = parseFloat((leftOperand + rightOperand).toFixed(10));
        break;

      case "-":
        res = parseFloat((leftOperand - rightOperand).toFixed(10));
        break;

      case "/":
        res =  parseFloat((leftOperand / rightOperand).toFixed(10));
        break;

      case "*":
        res = parseFloat((leftOperand * rightOperand).toFixed(10));
        break;

      case "sqrt":
        if(leftOperand >= 0) return parseFloat(Math.sqrt(leftOperand).toFixed(10));
        this.error = true;
        return "";

      case "square":
        res = parseFloat((leftOperand ** 2).toFixed(10));
    }

    if (Math.abs(res) > max) {
      this.error = true;
      return "";
    }

    return res;
  }
}

new Calculator();