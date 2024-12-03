import { ValueObject } from "../../shared/valueObject";

interface PriceValue {
  amount: number;
  currency: "JPY";
}

export class Price extends ValueObject<PriceValue, "Price"> {
  static readonly MAX = 1000000;
  static readonly MIN = 1;

  constructor(props: PriceValue) {
    super(props);
  }

  protected validate(value: PriceValue): void {
    if (value.currency !== "JPY") {
      throw new Error("現在は日本円のみを扱います");
    }

    if (value.amount < Price.MIN || value.amount > Price.MAX) {
      throw new Error(
        `価格は${Price.MIN}以上${Price.MAX}以下である必要があります`
      );
    }
  }

  get amount(): number {
    return this.value.amount;
  }

  get currency(): "JPY" {
    return this.value.currency;
  }
}
