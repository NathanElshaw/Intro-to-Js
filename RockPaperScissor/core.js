const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const outcome = document.querySelector("#result");
const score = document.querySelector("#score");
const restart = document.querySelector("#restart");

let userSign = "";
let userscore = 0;
let aiscore = 0;

rock.addEventListener("click", () => {
  game("rock");
});

paper.addEventListener("click", () => {
  game("paper");
});

scissor.addEventListener("click", () => {
  game("scissor");
});

restart.addEventListener("click", () => {
  gameRestart();
});

function initAi() {
  let sign = Math.floor(Math.random() * 3);
  let truesign = "";
  if (sign === 0) {
    truesign = "rock";
  } else if (sign === 1) {
    truesign = "paper";
  } else {
    truesign === "scissor";
  }
  return truesign;
}

function game(userInput) {
  let ai = initAi();
  let user = userInput;
  if (
    (ai === "paper" && user === "scissor") ||
    (ai === "scissor" && user === "rock") ||
    (ai === "rock" && user === "paper")
  ) {
    outcome.textContent = "User Wins";
    userscore++;
  } else if (ai === user) {
    ai = initAi();
    outcome.textContent = "Draw";
  } else {
    outcome.textContent = "Ai wins";
    aiscore++;
  }
  if (aiscore === 2 || userscore === 2) {
    outcome.textContent = `Game Over! User: ${userscore}, Ai: ${aiscore}`;
    restart.className = "visible";
  }
  score.textContent = `\nAi: ${aiscore}\n User: ${userscore}`;
}

function gameRestart() {
  aiscore = 0;
  userscore = 0;
  score.textContent = `\nAi: ${aiscore}\n User: ${userscore}`;
  outcome.textContent = "";
  restart.classList = "hidden";
}

/*
Get user input then have compture randomly select a sign.
Compare what each user threw to figure out who wins.
Best of 3 wins
 */
