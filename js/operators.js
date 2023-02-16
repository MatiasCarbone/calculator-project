//This script file contains the functions that do the mathematical operations

const operate = function (a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);

    case "-":
      return subtract(a, b);

    case "x":
      return multiply(a, b);

    case "/":
      return divide(a, b);
  }
};

/********************************************************************************/

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  if (b == 0) {
    return "really?";
  } else return a / b;
};

export { operate };
