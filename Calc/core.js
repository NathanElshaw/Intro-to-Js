const currentDisplay = document.getElementById("currentDisplay");
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
    runningCount(btnMain.value, currentDisplay.value);
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
  firstOperation = operate(firstOperation, currentDisplay.value, firstOperator);
  firstOperator = null;
  currentDisplay.textContent = firstOperation;
  currentDisplay.value = 0;
});

//Makes a running count so numbers can be added on
function runningCount(input, last) {
  if (currentDisplay.textContent === "0" || currentDisplay.value === "0") {
    currentDisplay.textContent = input;
    currentDisplay.value = input;
  } else {
    currentDisplay.textContent = last.concat(input);
    currentDisplay.value = last.concat(input);
  }
}

//Main logic when a operator is added  and logs numbers to use in an equation
function addOperator(input) {
  if (firstOperation === null) {
    firstOperation = currentDisplay.value;
    firstOperator = input;
    currentDisplay.textContent = 0;
    currentDisplay.value = 0;
  } else {
    //Else then it add the display number to second operation
    secondOperation = currentDisplay.value;
    secondOperator = input;
    currentDisplay.value = 0;
    //Then if all  pieces of a equation are there it executes and reassigns the operator to the first
    if (firstOperation != null && secondOperation != null) {
      firstOperation = operate(firstOperation, secondOperation, firstOperator);
      firstOperation = firstOperation.toString();
      currentDisplay.textContent = 0;
      currentDisplay.value = 0;
      firstOperator = secondOperator;
      secondOperator = null;
      secondOperation = null;
    }
  }
}

// Takes 2 numbers and an operator and computes it
function operate(a, b, op) {
  a = parseInt(a);
  b = parseInt(b);
  if (op === "+") {
    return a + b;
  } else if (op === "-") {
    return a - b;
  } else if (op === "*") {
    return a * b;
  } else if (op === "/") {
    if (b === 0) {
      currentDisplay.textContent = "That Doesnt work";
    } else {
      return a / b;
    }
  }
}

//Resets the program and display to default
function clearDisplay() {
  firstOperation = null;
  secondOperation = null;
  firstOperator = null;
  secondOperator = null;
  currentDisplay.textContent = 0;
  currentDisplay.value;
}

/* 
Get button input -Done
keep a running string of numbers before a logic op is used - Done
add second, and so on input - Done
evalute the function - Done
*/
