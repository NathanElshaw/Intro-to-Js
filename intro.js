function add7(a) {
  return a + 7;
}

console.log(add7(19));

function muliply(a, b) {
  return a * b;
}

console.log(muliply(8, 8));

function captial(string) {
  const lower = string.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

console.log(captial("gOAT"));

function last(string) {
  n = string.length - 1;
  return string.charAt(n);
}

console.log(last("imlearning!"));

function finnBuzz(int) {
  let answer = 0;
  for (let n = 0; int >= n; n++) {
    if (
      ((answer = n / 3), answer - Math.floor(answer) === 0) &&
      ((answer = n / 5), answer - Math.floor(answer) === 0)
    ) {
      console.log("FinnBuzz");
    } else if (((answer = n / 3), answer - Math.floor(answer) === 0)) {
      console.log("Finn");
    } else if (((answer = n / 5), answer - Math.floor(answer) === 0)) {
      console.log("Buzz");
    } else {
      console.log(n);
    }
  }
}

console.log(finnBuzz(26));

function finnBuzz2(int) {
  for (let i = 1; i <= int; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

console.log(finnBuzz2(26));

const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
  console.log(e.target);
});
