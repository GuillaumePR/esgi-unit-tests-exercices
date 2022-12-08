import {sayHello} from "./hello.js";
//const sayHello = require("./hello.js");

test('valid string should return hello + string', () => {
  expect(sayHello("Manu")).toBe("Hello Manu");
});

test('string as length of 0', () => {
  expect(() => sayHello(new String)).toThrow("Name must have max 30 characters and min 1 character.");
});

test('string as length more than 30', () => {
  expect(() => sayHello("This string is longer than 30 characters")).toThrow("Name must have max 30 characters and min 1 character.");
});

test('value not string but integer', () => {
  expect(() => sayHello(666)).toThrow("Parameter name is not an instance of String.");
});

test('value not string but class', () => {
  expect(() => sayHello(String.class)).toThrow("Parameter name is not an instance of String.");
});