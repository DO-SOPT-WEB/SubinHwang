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
const incomeButton = document.querySelector("#money-type #type-income");
const spendingButton = document.querySelector("#money-type #type-spending");

incomeButton.addEventListener("click", () => {
  handleButtonClick();
});

spendingButton.addEventListener("click", () => {
  handleButtonClick();
});

function handleButtonClick() {
  const isIncomeChecked = incomeButton.checked;
  const isSpendingChecked = spendingButton.checked;

  if (isIncomeChecked && isSpendingChecked) { //둘다체크
    updateData();
  } else if (isIncomeChecked) { //수입만 체크
    updateData(TRANSACTION_TYPE.INCOME);
  } else if (isSpendingChecked) { //지출만 체크
    updateData(TRANSACTION_TYPE.SPENDING);
  } else { //둘다체크 안됨
    resetData();
  }
}

function resetData(){
  while (historyDiv.firstChild) {
    historyDiv.removeChild(historyDiv.firstChild);
  }
}
function updateData(type) {
  resetData();

  if (type === undefined) {
    HISTORY_LIST.forEach((history) => {
      addList(history);
    });
  } else {
    HISTORY_LIST.forEach((history) => {
      if (history[0] === type) {
        addList(history);
      }
    });
  }
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
