import { ELEMENT, HISTORY_DIV, HISTORY_LIST } from "./constants.js";
import {
  makeCategoryElement,
  makeDeleteButton,
  makeNameElement,
  makePriceElement,
} from "./elementCreator.js";
import { setDeleteEvent } from "./historyDataDeleter.js";

function addList(history) {
  const list = document.createElement(ELEMENT.HTMLTAG.LIST);
  list.append(
    makeCategoryElement(history[1]),
    makeNameElement(history[2]),
    makePriceElement(history[0], history[3]),
    makeDeleteButton(history[4])
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
  if (list === undefined) { //전체 데이터를 렌더링 하고자 호출했을 때
    list = HISTORY_LIST;
  }
  resetData();
  list.forEach((history) => {
    addList(history);
  });
  setDeleteEvent();
}