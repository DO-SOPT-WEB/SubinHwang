import { ELEMENT, HISTORY_LIST, MESSAGE, TRANSACTION_TYPE } from "../utils/constants.js";
import { renderHistoryList } from "./HistoryView.js";
import { renderAssetData } from "../Asset/AssetView.js";
import {
  ADD_HISTORY_BUTTON,
  CLOSE_MODAL_BUTTON,
  CONTENT_INPUT,
  MODAL,
  MODAL_BACKGROUND,
  PRICE_INPUT,
  SAVE_BUTTON,
  SELECTED_CATEGORY,
  SELECTOR,
  SELECTOR_DIV,
  SELECT_TYPE_SPENDING,
} from "../utils/documentElements.js";

function handleSelectorClick() {
  SELECTOR_DIV.classList.add(ELEMENT.CLASSNAME.ACTIVE);
}

function handleAddHistoryButtonClick() {
  MODAL_BACKGROUND.style.display = ELEMENT.STYLE.DISPLAY.BLOCK;
  MODAL.style.bottom = 0;
}

function handleCloseModalButtonClick() {
  MODAL_BACKGROUND.style.display = ELEMENT.STYLE.DISPLAY.NONE;
  MODAL.style.bottom = "-60%";
}

function handleSaveButtonClick() {
  const transactionType = SELECT_TYPE_SPENDING.checked ? TRANSACTION_TYPE.SPENDING : TRANSACTION_TYPE.INCOME;
  const money = parseInt(PRICE_INPUT.value.replace(/,/g, ""));
  const content = CONTENT_INPUT.value;
  const category = SELECTED_CATEGORY.innerText;

  if (!money || !content || category === MESSAGE.CATEGORY_UNSELECTED) {
    alert(MESSAGE.EMPTY_FIELD);
    resetField();
  } else {
    HISTORY_LIST.push({
      id: HISTORY_LIST.length - 1,
      type: transactionType,
      category: category,
      content: content,
      money: money,
    });
    renderHistoryList();
    renderAssetData();
    alert(MESSAGE.ADD_LIST_SUCCESS);
    resetField();
  }
}

function handlePriceInputFieldInput(e) {
  if (isNaN(e.data)) {
    alert(MESSAGE.PRICE_IS_NOT_NUMBER);
    PRICE_INPUT.value = "";
  }
}

function resetField() {
  PRICE_INPUT.value = "";
  CONTENT_INPUT.value = "";
}

export function handleModal() {
  SELECTOR.addEventListener("click", handleSelectorClick);
  ADD_HISTORY_BUTTON.addEventListener("click", handleAddHistoryButtonClick);
  CLOSE_MODAL_BUTTON.addEventListener("click", handleCloseModalButtonClick);
  SAVE_BUTTON.addEventListener("click", handleSaveButtonClick);
  PRICE_INPUT.addEventListener("input", handlePriceInputFieldInput);
}
