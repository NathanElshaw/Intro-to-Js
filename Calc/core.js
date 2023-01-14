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
  console.log(
    "Check enter",
    firstOperation,
    currentDisplay.textContent,
    firstOperator
  );
  operate(firstOperation, currentDisplay.textContent, firstOperator);
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
  if (firstOperation === null) {
    firstOperation = currentDisplay.textContent;
    firstOperator = input;
    console.log("1st", firstOperation, firstOperator);
    currentDisplay.textContent = 0;
  } else {
    secondOperation = currentDisplay.textContent;
    secondOperator = input;
    currentDisplay.textContent = 0;
    console.log("2nd", secondOperation, secondOperator);
    if (firstOperation != null && secondOperation != null) {
      operate(firstOperation, secondOperation, firstOperator);
      secondOperator = null;
      secondOperation = null;
      currentDisplay.textContent = 0;
      console.log(
        "last if Check",
        firstOperation,
        secondOperation,
        firstOperator,
        secondOperator
      );
    }
    console.log("last if skipped");
  }
}

function operate(a, b, op) {
  console.log("operated", a, b, op);
  if (op === "+") {
    firstOperation = a + b;
  } else if (op === "-") {
    firstOperation = a - b;
  } else if (op === "*") {
    firstOperation = a * b;
  } else if (op === "/") {
    if (b === 0) {
      currentDisplay.textContent = "That Doesnt work";
    } else {
      firstOperation = a / b;
    }
  }
  console.log(firstOperation);
  firstOperator = null;
  secondOperation = null;
}

function clearDisplay() {
  firstOperation = null;
  secondOperation = null;
  firstOperator = null;
  secondOperator = null;
  currentDisplay.textContent = 0;
}

/* 
Get button input -Done
keep a running string of numbers before a logic op is used - Done
add second, and so on input - Done
evalute the function
*/
