const add = function(opOne, opTwo) {
	return opOne + opTwo;
};

const subtract = function(opOne, opTwo) {
	return opOne - opTwo;
};

const sum = function(array) {
	return array.reduce((prev, cur) => {
    return prev + cur;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((prev, cur) => {
    return prev*cur;
  });
};

const power = function(opOne, opTwo) {
  return Math.pow(opOne, opTwo);
};

const factorial = function(operand) {
	if(operand === 0) {
    return 1;
  }

  let factorial = operand;
  for(let i = operand-1; i > 1; i--){
    factorial *= i;
  }

  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
