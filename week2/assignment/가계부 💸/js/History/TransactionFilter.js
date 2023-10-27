import { TRANSACTION_TYPE, HISTORY_LIST } from "../utils/constants.js";
import { INCOME_BUTTON, SPENDING_BUTTON } from "../utils/documentElements.js";
import { renderHistoryList, resetData } from "./HistoryView.js";

INCOME_BUTTON.addEventListener("click", handleButtonClick);
SPENDING_BUTTON.addEventListener("click", handleButtonClick);

function handleButtonClick() {
  const isIncomeChecked = INCOME_BUTTON.checked;
  const isSpendingChecked = SPENDING_BUTTON.checked;

  if (!isIncomeChecked && !isSpendingChecked) {
    // 둘 다 체크 안된 경우
    resetData();
  } else {
    const selectedTypes = [];

    if (isIncomeChecked) selectedTypes.push(TRANSACTION_TYPE.INCOME);
    if (isSpendingChecked) selectedTypes.push(TRANSACTION_TYPE.SPENDING);

    const filteredHistoryList = filterHistoryList(selectedTypes);
    renderHistoryList(filteredHistoryList);
  }
}

function filterHistoryList(types) {
  return HISTORY_LIST.filter((history) => types.includes(history[1]));
}
