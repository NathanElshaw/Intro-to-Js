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
