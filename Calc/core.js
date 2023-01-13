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

//Makes a running count so numbers can be added on
function runningCount(input, last) {
  if (currentDisplay.textContent === "0") {
    currentDisplay.textContent = input;
  } else {
    currentDisplay.textContent = last.concat(input);
  }
}

//Main logic when a operator is added  and logs numbers to use in an equation
function addOperator(input) {
  //checks if the first operation is null if true then it add the current display value to second operator
  if (firstOperation != null) {
    secondOperation = currentDisplay.textContent;
    if (
      firstOperation != null &&
      secondOperation != null &&
      firstOperator != null
    ) {
      // if first and second operation arent null and theres a operator this will calcuate it
      firstOperation = operate(firstOperation, secondOperation, firstOperator);
    }
  } else {
    // Makes current display the first operation
    firstOperation = currentDisplay.textContent;
    firstOperator = input;
    currentDisplay.textContent = "0";
  }
  console.log("Running count", firstOperation, secondOperation, firstOperator);

  console.log("eq check", firstOperator);
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
