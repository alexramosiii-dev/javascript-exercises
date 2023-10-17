const add = function(x,y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y
};

const sum = function(x) {
  let sum = 0;
	for (const num of x) {
    sum += num;
  }
  return sum;
};

const multiply = function(x) {
  let sum = 1;
	for (const num of x) {
    sum *= num;
  }
  return sum;
};

const power = function(x,y) {
	let sum = 1;
	for (let i = 0; i < y; i++) {
    sum *= x;
  }
  return sum;
};

const factorial = function(x) {
	let sum = 1;
	for (let i = 0; i < x; i++) {
    sum *= i + 1;
  }
  return sum;
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
