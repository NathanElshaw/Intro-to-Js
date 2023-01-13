const currentDisplay = document.querySelector("#currentDisplay");
const clear = document.querySelector("#clear");
const enter = document.querySelector("#operate");

const calcButton = document.querySelectorAll(".btnMain");
const operatorButton = document.querySelectorAll(".operator");

let display = null;

let firstOperation = null;
let secondOperation = null;
let firstOperator = null;
let secondOperator = null;

calcButton.forEach((btnMain) => {
  btnMain.addEventListener("click", () => {
    runningCount(btnMain.value, currentDisplay.textContent);
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
  console.log(firstOperation, secondOperation, firstOperator);
  console.log(operate(firstOperation, secondOperation, firstOperator));
});

function runningCount(input, last) {
  if (currentDisplay.textContent === "0") {
    currentDisplay.textContent = input;
  } else {
    currentDisplay.textContent = last.concat(input);
  }
}

function addOperator(input) {
  if (firstOperation != null) {
    secondOperation = currentDisplay.textContent;
    console.log("first if exe", secondOperation);
    firstOperator = null;
  } else if ((secondOperation = null)) {
    firstOperation = currentDisplay.textContent;
  } else {
    currentDisplay.textContent = operate(
      secondOperation,
      firstOperation,
      firstOperator
    );
  }
  console.log(
    "Running count",
    firstOperation,
    secondOperation,
    firstOperator,
    secondOperator
  );
  if (firstOperator != null) {
    operate(firstOperation, secondOperation, firstOperator);
    secondOperator = input;
    firstOperation = null;
  } else {
    firstOperator = input;
    currentDisplay.textContent = "0";
    secondOperator = null;
  }
  console.log("eq check", firstOperator, secondOperator);
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
  secondOperation = currentDisplay.textContent;
  firstOperation = null;
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
