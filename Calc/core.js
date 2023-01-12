const currentDisplay = document.querySelector("#currentDisplay");
const clear = document.querySelector("#clear");
const enter = document.querySelector("#operate");

const calcButton = document.querySelectorAll(".btnMain");
const operatorButton = document.querySelectorAll(".operator");

let firstOperation = null;
let secondOperation = null;
let firstOperator = null;
let secondOperator = null;

calcButton.forEach((btnMain) => {
  btnMain.addEventListener("click", () => {
    updateDisplay();
  });
});

operatorButton.forEach((operator) => {
  operator.addEventListener("click", () => {
    addOperator(operator.value);
  });
});

clear.addEventListener("click", () => {
  clearDisplay();
});

enter.addEventListener("click", () => {
  operate(pastDisplay.textContent, currentDisplay.textContent);
});

function addOperator(input) {
  if (firstOperator != null) {
    secondOperator = input;
  } else {
    firstOperator = input;
    operate(a, b, op);
    secondOperator = null;
  }
  console.log(firstOperator, secondOperator);
}

function operate(a, b, op) {
  if (op === "+") {
    currentDisplay.textContent = a + b;
  } else if (op === "-") {
    currentDisplay.textContent = a - b;
  } else if (op === "*") {
    currentDisplay.textContent = a * b;
  } else if (op === "/") {
    if (b === 0) {
      currentDisplay.textContent = "That Doesnt work";
    } else {
      currentDisplay.textContent = a / b;
    }
  }
}

function clearDisplay() {
  firstOperation = null;
  secondOperation = null;
  firstOperator = null;
  secondOperator = null;
  currentDisplay.textContent = 1;
}

/* 
Get button input -Done
keep a running string of numbers before a logic op is used - Done
add second, and so on input - Done
evalute the function
*/
