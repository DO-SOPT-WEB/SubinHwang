import { ELEMENT, HISTORY_LIST } from "../utils/constants.js";
import { HISTORY_DIV } from "../utils/documentElements.js";
import { setDeleteEvent } from "./HistoryController.js";
import { changeFormat } from "../utils/moneyFormatter.js";
import { makeCategoryElement, makeDeleteButton, makeNameElement, makePriceElement } from "./HistoryListTemplate.js";
import { handleModal } from "./ModalController.js";

function addList(history) {
  const list = document.createElement(ELEMENT.HTMLTAG.LIST);
  list.append(
    makeCategoryElement(history.category),
    makeNameElement(history.content),
    makePriceElement(history.type, history.money),
    makeDeleteButton(history.id)
  );
  HISTORY_DIV.appendChild(list);
  setDeleteEvent();
}

export function resetData() {
  while (HISTORY_DIV.firstChild) {
    HISTORY_DIV.removeChild(HISTORY_DIV.firstChild);
  }
}

export function renderHistoryList(list) {
  if (list === undefined) {
    //전체 데이터를 렌더링 하고자 호출했을 때
    list = HISTORY_LIST;
  }
  resetData();
  list.forEach((history) => {
    addList(history);
  });
  changeFormat();
}

handleModal();
