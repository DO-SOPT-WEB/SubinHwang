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
  ATTRIBUTE: {
    DATA_INDEX: "data-index",
  },
};

export const HISTORY_LIST = [
  [0, TRANSACTION_TYPE.INCOME, CATEGORY.ALLOWANCE, "생활비", 1200000],
  [1, TRANSACTION_TYPE.SPENDING, CATEGORY.TRANSPORTATION, "티머니", 6200],
  [2, TRANSACTION_TYPE.SPENDING, CATEGORY.SHOPPING, "쿠팡환불", 27000],
  [3, TRANSACTION_TYPE.INCOME, CATEGORY.TRANSFER, "홍길동", 3000],
];

export const HISTORY_DIV = document.querySelector("#history ul");
export const INCOME_BUTTON = document.querySelector("#money-type #type-income");
export const SPENDING_BUTTON = document.querySelector(
  "#money-type #type-spending"
);
export const historyDiv = document.querySelector("#history ul");
export const TOTAL_MONEY = document.querySelector("#asset #money");
export const TODY_TOTAL_INCOME = document.querySelector("#today .income");
export const TODY_TOTAL_SPENDING = document.querySelector("#today .spending");
export const MODAL_DELETE = document.querySelector("#delete-modal");
export const BACKGROUND_OF_MODAL = document.querySelector("#modal-background");
export const CONFIRM_BUTTON = document.querySelector("button#confirm");
export const CANCEL_BUTTON = document.querySelector("button#cancel");