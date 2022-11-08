const {
  stringLength,
  reverseString,
  calculator,
  capitalize,
} = require("./index");

test("characters", () => {
  expect(stringLength("hello")).toBe(true);
});

test("function should return reverse string", () => {
  expect(reverseString("hello")).toBe("olleh");
});
describe("calculator", () => {
  test("add method should return num1 plus num2", () => {
    expect(calculator.add(3, 4)).toBe(7);
  });
  test("subtract method should return num2 minus num1", () => {
    expect(calculator.subtract(4, 3)).toBe(1);
  });
  test("divide method should return num1 divide num2", () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });
  test("multiply method should return num1 multiply num2", () => {
    expect(calculator.multiply(3, 4)).toBe(12);
  });
});
test("character method should return the first char to be uppercase", () => {
  expect(capitalize("hello")).toBe("Hello");
});
