export const INIT_BALANCE = 0;
export const INIT_INCOME = 0;
export const INIT_SPENDING = 0;

export const TRANSACTION_TYPE = {
  SPENDING: 0,
  INCOME: 1,
};

const CATEGORY = {
  ALLOWANCE: "용돈",
  TRANSPORTATION: "교통",
  SHOPPING: "쇼핑",
  TRANSFER: "이체",
};

export const ELEMENT = {
  HTMLTAG: {
    TEXT: "p",
    LIST: "li",
    BUTTON: "button",
  },
  CLASSNAME: {
    CATEGORY: "category",
    NAME: "name",
    PRICE: "price",
    SPENDING: "spending",
    INCOME: "income",
    DELETE: "delete",
  },
};

export const HISTORY_LIST = [
  [TRANSACTION_TYPE.INCOME, CATEGORY.ALLOWANCE, "생활비", 1200000],
  [TRANSACTION_TYPE.SPENDING, CATEGORY.TRANSPORTATION, "티머니", 6200],
  [TRANSACTION_TYPE.SPENDING, CATEGORY.SHOPPING, "쿠팡환불", 27000],
  [TRANSACTION_TYPE.INCOME, CATEGORY.TRANSFER, "홍길동", 3000],
];
