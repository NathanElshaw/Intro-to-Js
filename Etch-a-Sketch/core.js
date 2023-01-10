const app = document.getElementById("app");
const rows = document.getElementById("inputRows");
const cols = document.getElementById("inputCols");
const init = document.getElementById("change");
const resize = document.getElementById("resize");

let div = document.createElement("div");

init.addEventListener("click", () => {
  makeGrid(rows.value, cols.value);
  init.className = "hidden";
  resize.className = "seen";
});

resize.addEventListener("click", () => {
  console.log(rows.value);
  console.log(cols.value);
  const lastvalue = app.childElementCount;
  clearGrid(lastvalue);
});

function clearGrid(num) {
  for (i = 0; i < num; i++) {
    app.removeChild(app.firstChild);
  }
  makeGrid(rows.value, cols.value);
}

function makeGrid(rows, cols) {
  app.style.setProperty("--grid-rows", rows);
  app.style.setProperty("--grid-cols", cols);
  for (i = 0; i < rows * cols; i++) {
    let div = document.createElement("div");
    div.innerText = i + 1;
    app.appendChild(div).className = "grid-item";
  }
}
