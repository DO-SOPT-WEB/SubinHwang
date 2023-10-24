import {
  TRANSACTION_TYPE,
  HISTORY_LIST,
  INCOME_BUTTON,
  SPENDING_BUTTON,
} from "./utils/constants.js";

import {
  renderHistoryList,
  resetData,
} from "./utils/elementCreator.js";

INCOME_BUTTON.addEventListener("click", () => {
  handleButtonClick();
});

SPENDING_BUTTON.addEventListener("click", () => {
  handleButtonClick();
});
  
export function handleButtonClick() {
  const isIncomeChecked = INCOME_BUTTON.checked;
  const isSpendingChecked = SPENDING_BUTTON.checked;

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

function updateData(type) {
  let typeList = []
  if (type === undefined) {
    renderHistoryList(HISTORY_LIST);
  } else {
    HISTORY_LIST.forEach((history) => {
      if (type === history[0]) {
        typeList.push(history)
      }
    });
    renderHistoryList(typeList)
  }
  
}
