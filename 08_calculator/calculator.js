const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if (arr.length === 0) return 0;

  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
	return sum;
};

const multiply = function(arr) {
  // array.reduce can work here
  if (arr.length === 0) return 0;

  let prod = 1;
  for (const num of arr) {
    prod *= num;
  }
	return prod;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	if (a === 0) return 1;
  let fact = 1;
  for (let i = 1; i <= a; i ++)
    fact *= i;
  return fact;
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
