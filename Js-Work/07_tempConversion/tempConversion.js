const convertToCelsius = function (deg) {
  let result = ((deg - 32) * 5) / 8;
  result = Math.round(result * 100) / 100;
  return result;
};

const convertToFahrenheit = function (deg) {
  let result = (deg * 9) / 5 + 32;
  result = Math.round(result * 100) / 100;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
