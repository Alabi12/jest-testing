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
// ex 3
describe("calculator add", () => {
  test("add method should return num1 plus num2", () => {
    expect(calculator.add(3, 4)).toBe(7);
  });
  test("add method should return num1 plus num2", () => {
    expect(calculator.add(4, 2)).toBe(6);
  });
  test("add method should return num1 plus num2", () => {
    expect(calculator.add(1, 4)).toBe(5);
  });
});

describe("calculator subtract", () => {
  test("subtract method should return num2 minus num1", () => {
    expect(calculator.subtract(20, 15)).toBe(5);
  });
  test("subtract method should return num2 minus num1", () => {
    expect(calculator.subtract(40, 30)).toBe(10);
  });
  test("subtract method should return num2 minus num1", () => {
    expect(calculator.subtract(13, 3)).toBe(10);
  });
});

describe("calculator divide", () => {
  test("divide method should return num1 divide num2", () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });
  test("divide method should return num1 divide num2", () => {
    expect(calculator.divide(40, 20)).toBe(2);
  });
  test("divide method should return num1 divide num2", () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });
});

describe("calculator multiply", () => {
  test("multiply method should return num1 multiply num2", () => {
    expect(calculator.multiply(3, 4)).toBe(12);
  });
  test("multiply method should return num1 multiply num2", () => {
    expect(calculator.multiply(1, 4)).toBe(4);
  });
  test("multiply method should return num1 multiply num2", () => {
    expect(calculator.multiply(4, 2)).toBe(8);
  });
});
// ex 4
test("character method should return the first char to be uppercase", () => {
  expect(capitalize("hello")).toBe("Hello");
});
