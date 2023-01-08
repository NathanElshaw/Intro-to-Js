function initAi() {
  let sign = Math.floor(Math.random() * 3);
  let truesign = "";
  if (sign === 0) {
    truesign = "rock";
  } else if (sign === 1) {
    truesign = "paper";
  } else {
    truesign === "scissors";
  }
  return truesign;
}

function game() {
  let userscore = 0;
  let aiscore = 0;
  for (let i = 0; i < 10; i++) {
    let ai = initAi();
    let user = prompt();
    user.toLowerCase;
    if (
      (ai === "paper" && user === "scissor") ||
      (ai === "scissors" && user === "rock") ||
      (ai === "rock" && user === "paper")
    ) {
      console.log("User Wins");
      userscore++;
    } else if (ai === user) {
      ai = initAi();
      alert("Draw");
    } else {
      console.log("Ai wins");
      aiscore++;
    }

    if (aiscore === 2 || userscore === 2) {
      i = 11;
      alert(`Game Over! User: ${userscore}, Ai: ${aiscore}`);
    }
  }
}

game();
/*
Get user input then have compture randomly select a sign.
Compare what each user threw to figure out who wins.
Best of 3 wins
 */
