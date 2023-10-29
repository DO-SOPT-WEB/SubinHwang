export const INIT_BALANCE = 0;
export const INIT_INCOME = 0;
export const INIT_SPENDING = 0;

export const TRANSACTION_TYPE = {
  SPENDING: 0,
  INCOME: 1,
};

export const LOCAL_STORAGE = {
  SPENDING: "categories-spending",
  INCOME: "categories-income",
};

export const CATEGORY = {
  SPENDING:
    localStorage.getItem(LOCAL_STORAGE.SPENDING) !== null //로컬스토리지에 값이 있는지 체크
      ? JSON.parse(localStorage.getItem(LOCAL_STORAGE.SPENDING))
      : ["쇼핑", "교통"],
  INCOME:
    localStorage.getItem(LOCAL_STORAGE.INCOME) !== null
      ? JSON.parse(localStorage.getItem(LOCAL_STORAGE.INCOME))
      : ["이체", "용돈"],
};

export const ELEMENT = {
  HTMLTAG: {
    TEXT: "p",
    LIST: "li",
    BUTTON: "button",
    DIV: "div",
  },
  CLASSNAME: {
    CATEGORY: "category",
    NAME: "name",
    PRICE: "price",
    SPENDING: "spending",
    INCOME: "income",
    DELETE: "delete",
    MONEY: "money",
    TYPE_INCOME: "type-income",
    TYPE_SPENDING: "type-spending",
    CATEGORY_TAG: "category-tag",
    ACTIVE: "active",
  },
  ATTRIBUTE: {
    DATA_INDEX: "data-index",
  },
  STYLE: {
    DISPLAY: {
      FLEX: "flex",
      BLOCK: "block",
      NONE: "none",
    },
  },
};

export const MESSAGE = {
  EMPTY_FIELD: "모든 필드를 입력해주세요",
  CATEGORY_UNSELECTED: "카테고리를 선택하세요",
  ADD_LIST_SUCCESS: "내역이 추가되었어요",
  PRICE_IS_NOT_NUMBER: "금액은 숫자여야 합니다",
};

export const HISTORY_LIST = [
  [0, TRANSACTION_TYPE.INCOME, CATEGORY.INCOME[0], "생활비", 1200000],
  [1, TRANSACTION_TYPE.SPENDING, CATEGORY.SPENDING[0], "티머니", 6200],
  [2, TRANSACTION_TYPE.SPENDING, CATEGORY.SPENDING[1], "쿠팡환불", 27000],
  [3, TRANSACTION_TYPE.INCOME, CATEGORY.INCOME[1], "홍길동", 3000],
];
