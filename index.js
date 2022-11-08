const { text } = require("stream/consumers");

// task 1
function stringLength(string) {
  const count = string.length;
  if (count < 10 && count > 1) return true;
  else false;
}

// task 2

function reverseString(string) {
  return string.split("").reverse().join("");
}

// task 3
class calculator {
  static add(num1, num2) {
    return num1 + num2;
  }
  static subtract(num1, num2) {
    return num1 - num2;
  }
  static divide(num1, num2) {
    return num1 / num2;
  }
  static multiply(num1, num2) {
    return num1 * num2;
  }
}

// task 4
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
module.exports = { reverseString, stringLength, calculator, capitalize };
