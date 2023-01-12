const pastDisplay = document.querySelector("#pastDisplay");
const currentDisplay = document.querySelector("#currentDisplay");

const clear = document.querySelector("#clear");
const enter = document.querySelector("#operate");

const calcButton = document.querySelectorAll(".btnMain");

let display = 0;
let appendInt = 0;
let currentOp = "";

calcButton.forEach((btnMain) => {
  btnMain.addEventListener("click", () => {
    updateDisplay(
      btnMain.value,
      currentDisplay.textContent,
      pastDisplay.textContent
    );
  });
});

clear.addEventListener("click", () => {
  clearDisplay();
});

enter.addEventListener("click", () => {
  operate(pastDisplay.textContent, currentDisplay.textContent);
});

function clearDisplay() {
  currentDisplay.textContent = 0;
  pastDisplay.textContent = 0;
  pastDisplay.className = "hidden";
}

function updateDisplay(newInt, lastInt, miniDisplay) {
  if (newInt === "/" || newInt === "*" || newInt === "-" || newInt === "+") {
    let cache = (pastDisplay.textContent = lastInt.concat(` `, newInt));
    if (miniDisplay.length > 1) {
      currentOp = currentOp + cache;
      display = miniDisplay;
      pastDisplay.textContent = cache;
      console.log(currentOp);
    }
    currentOp = cache;
    pastDisplay.className = "shown";
    currentDisplay.textContent = 0;
  } else {
    if (lastInt > 0) {
      appendInt = newInt;
      currentDisplay.textContent = lastInt.concat(newInt);
    } else {
      currentDisplay.textContent = newInt;
    }
  }
}

function operate(past, current) {
  console.log(past, current);
}

/* 
Get button input -Done
keep a running string of numbers before a logic op is used - Done
add second, and so on input - Done
evalute the function
*/
