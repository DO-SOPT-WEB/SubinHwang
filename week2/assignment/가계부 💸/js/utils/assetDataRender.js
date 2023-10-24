import {
  HISTORY_LIST,
  INIT_BALANCE,
  INIT_INCOME,
  INIT_SPENDING,
  TODY_TOTAL_INCOME,
  TODY_TOTAL_SPENDING,
  TOTAL_MONEY,
  TRANSACTION_TYPE,
} from "./constants.js";

let total;
let income;
let spending;

function resetMoney(){
    total = INIT_BALANCE
    income = INIT_INCOME;
    spending = INIT_SPENDING;
}

function calculateMoney(history) {
  if (history[0] === TRANSACTION_TYPE.SPENDING) {
    total -= history[3];
    spending += history[3];
  }
  if (history[0] === TRANSACTION_TYPE.INCOME) {
    total += history[3];
    income += history[3];
  }
}

function setMoney() {
  TOTAL_MONEY.innerHTML = total;
  TODY_TOTAL_INCOME.innerHTML = income;
  TODY_TOTAL_SPENDING.innerHTML = spending;
}

export function renderAssetData(){
  resetMoney();
  HISTORY_LIST.forEach((history) => {
    calculateMoney(history);
  });
  setMoney();
}