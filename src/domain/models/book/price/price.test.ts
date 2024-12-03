import { describe, expect, test } from "vitest";
import { Price } from "./price";

describe("Price", () => {
  describe("正常系", () => {
    test("正しい価格が取得できる", () => {
      const price = new Price({ amount: 1000, currency: "JPY" });
      expect(price.amount).toBe(1000);
      expect(price.currency).toBe("JPY");
    });
  });
  // describe("異常系", () => {});
});
