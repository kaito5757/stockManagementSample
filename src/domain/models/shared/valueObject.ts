import { isEqual } from "es-toolkit";

export abstract class ValueObject<T, U> {
  /*
    - TypeScript は構造的型付けを採用しているため、型の互換性はその型が持つ構造に基づいて判断される。
    - そのため、型パラメータの型が異なっていても、プロパティやメソッドが同じであれば、同等の型として扱われる。
    - 専用プロパティ(_type）を用意することで、型パラメータの型が異なる場合にエラーを発生させることができる。
  */
  // @ts-expect-error
  private _type: U;
  protected readonly _value: T;

  constructor(value: T) {
    this.validate(value);
    this._value = value;
  }

  protected abstract validate(value: T): void;

  equals(other: ValueObject<T, U>): boolean {
    return isEqual(this._value, other.value);
  }

  get value(): T {
    return this._value;
  }
}
