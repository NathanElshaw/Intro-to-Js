const removeFromArray = function (arr, rem) {
  const index = arr.indexOf(rem);

  const output = arr.splice(index, 1);

  console.log(arr);
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
