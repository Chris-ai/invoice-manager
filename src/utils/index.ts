import { Currency } from "@/data/types";

const priceFormat = (price: number) =>
  price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export const formatPrice = (currency: Currency, price: number) => {
  switch (currency) {
    case Currency.USD:
      return `$ ${priceFormat(price)}`;
    case Currency.GBP:
      return `£ ${priceFormat(price)}`;
    case Currency.PLN:
      return `${priceFormat(price)} PLN`;
  }
};
