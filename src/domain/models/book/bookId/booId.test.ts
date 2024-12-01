import { describe, expect, test } from "vitest";
import { BookId } from "./bookId";

describe("BookId", () => {
  describe("正常系", () => {
    test("BookIdのフォーマットが正しい場合に値が取得できる（13桁、10桁）", () => {
      expect(new BookId("9784774163666").value).toBe("9784774163666");
      expect(new BookId("4774163666").value).toBe("4774163666");
    });

    test("BookIdの比較が正しくできる", () => {
      const bookId1 = new BookId("9784774163666");
      const bookId2 = new BookId("9784774163666");
      const bookId3 = new BookId("4774163666");

      expect(bookId1.equals(bookId2)).toBeTruthy();
      expect(bookId1.equals(bookId3)).toBeFalsy();
    });

    test("BookIdのISBN形式に変換できる", () => {
      expect(new BookId("9784774163666").toISBN()).toBe(
        "ISBN978-4-77-416366-6"
      );
      expect(new BookId("4774163666").toISBN()).toBe("ISBN4-77-416366-6");
    });
  });

  describe("異常系", () => {
    test("BookIdの文字数が不正な場合はエラーが発生する", () => {
      expect(() => new BookId("1".repeat(9))).toThrowError(
        "ISBNの文字数が不正です"
      );
      expect(() => new BookId("1".repeat(20))).toThrowError(
        "ISBNの文字数が不正です"
      );
    });

    test("BookIdのフォーマットが不正な場合はエラーが発生する", () => {
      expect(() => new BookId("9994774163666")).toThrowError(
        "ISBNの形式が不正です"
      );
    });
  });
});
