const app = document.getElementById("app");

function makeGrid(rows, cols) {
  app.style.setProperty("--grid-rows", rows);
  app.style.setProperty("--grid-cols", cols);
  for (i = 0; i < rows * cols; i++) {
    let div = document.createElement("div");
    div.innerText = i + 1;
    app.appendChild(div).className = "grid-item";
  }
}

makeGrid(16, 16);
