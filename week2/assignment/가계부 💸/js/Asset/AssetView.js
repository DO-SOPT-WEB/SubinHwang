import {
  HISTORY_LIST,
  INIT_BALANCE,
  INIT_INCOME,
  INIT_SPENDING,
  TRANSACTION_TYPE,
} from "../utils/constants.js";

import {
  TODY_TOTAL_INCOME,
  TODY_TOTAL_SPENDING,
  TOTAL_MONEY,
} from "../utils/documentElements.js";

import { changeFormat } from "../utils/moneyFormatter.js";

let total;
let income;
let spending;

function resetMoney() {
  total = INIT_BALANCE;
  income = INIT_INCOME;
  spending = INIT_SPENDING;
}

function calculateMoney(history) {
  switch (history.type) {
    case TRANSACTION_TYPE.SPENDING:
      total -= history.money;
      spending += history.money;
      break;
    case TRANSACTION_TYPE.INCOME:
      total += history.money;
      income += history.money;
      break;
    default:
      break;
  }
}

function setMoney() {
  TOTAL_MONEY.innerHTML = total;
  TODY_TOTAL_INCOME.innerHTML = income;
  TODY_TOTAL_SPENDING.innerHTML = spending;
}

export function renderAssetData() {
  resetMoney();
  HISTORY_LIST.forEach((history) => {
    calculateMoney(history);
  });
  setMoney();
  changeFormat();
}
