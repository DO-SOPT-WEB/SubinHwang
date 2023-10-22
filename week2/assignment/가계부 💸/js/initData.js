import {
  INIT_BALANCE,
  INIT_INCOME,
  INIT_SPENDING,
  TRANSACTION_TYPE,
  ELEMENT,
  HISTORY_LIST,
} from "./utils/constants.js";

import {
  makeCategoryElement,
  makeNameElement,
  makePriceElement,
  makeDeleteButton,
} from "./utils/elementCreator.js";

const historyDiv = document.querySelector("#history ul");
const totalMoney = document.querySelector("#asset #money");
const todayTotalIncome = document.querySelector("#today .income");
const todayTotalSpending = document.querySelector("#today .spending");

let total = INIT_BALANCE;
let income = INIT_INCOME;
let spending = INIT_SPENDING;

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
  totalMoney.innerHTML = total;
  todayTotalIncome.innerHTML = income;
  todayTotalSpending.innerHTML = spending;
}

function addList(history) {
  const list = document.createElement(ELEMENT.HTMLTAG.LIST);
  list.append(
    makeCategoryElement(history[1]),
    makeNameElement(history[2]),
    makePriceElement(history[0], history[3]),
    makeDeleteButton()
  );
  historyDiv.appendChild(list);
}

function setInitData() {
  HISTORY_LIST.forEach((history) => {
    addList(history);
    calculateMoney(history);
  });
  setMoney();
}

setInitData();
