import { expect, test } from "vitest";
import { sayHello } from "./sayHello";

test("sayHello", () => {
  expect(sayHello("world")).toBe("Hello world!");
});
