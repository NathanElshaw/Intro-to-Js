const sumAll = function (int1, int2) {
  let sum = 0;
  for (i = int1; i < int2 + 1; i++) {
    sum = i + sum;
    console.log(sum);
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
