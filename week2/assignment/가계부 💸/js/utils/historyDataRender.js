import { ELEMENT, HISTORY_DIV, HISTORY_LIST } from "./constants.js";
import {
  makeCategoryElement,
  makeDeleteButton,
  makeNameElement,
  makePriceElement,
} from "./elementCreator.js";
import { setDeleteEvent } from "./historyDataDeleter.js";
import { changeFormat } from "./moneyFormatter.js";

function addList(history) {
  const list = document.createElement(ELEMENT.HTMLTAG.LIST);
  list.append(
    makeCategoryElement(history[2]),
    makeNameElement(history[3]),
    makePriceElement(history[1], history[4]),
    makeDeleteButton(history[0])
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
  console.log("냥");
  changeFormat();
}