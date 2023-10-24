import {
  TRANSACTION_TYPE,
  ELEMENT,
  HISTORY_DIV,
  HISTORY_LIST
} from "./constants.js";
import { calculateMoney, resetMoney, setAssetData, setMoney } from "./assetDataRender.js";

export function makeCategoryElement(category) {
  const historyCategory = document.createElement(ELEMENT.HTMLTAG.TEXT);
  historyCategory.className = ELEMENT.CLASSNAME.CATEGORY;
  historyCategory.innerHTML = category;
  return historyCategory;
}

export function makeNameElement(name) {
  const historyName = document.createElement(ELEMENT.HTMLTAG.TEXT);
  historyName.className = ELEMENT.CLASSNAME.NAME;
  historyName.innerHTML = name;
  return historyName;
}

export function makePriceElement(type, price) {
  const historyPrice = document.createElement(ELEMENT.HTMLTAG.TEXT);
  historyPrice.className = ELEMENT.CLASSNAME.PRICE;
  if (type === TRANSACTION_TYPE.SPENDING) {
    historyPrice.classList.add(ELEMENT.CLASSNAME.SPENDING);
  }
  if (type === TRANSACTION_TYPE.INCOME) {
    historyPrice.classList.add(ELEMENT.CLASSNAME.INCOME);
  }
  historyPrice.innerText = price;
  return historyPrice;
}

export function makeDeleteButton(id) {
  const deleteButton = document.createElement(ELEMENT.HTMLTAG.BUTTON);
  deleteButton.className = ELEMENT.CLASSNAME.DELETE;
  const attributeName = "data-index";
  const attributeValue = id;
  deleteButton.setAttribute(attributeName, attributeValue);
  return deleteButton;
}


export function addList(history) {
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

export function renderHistoryList(list) {
  resetData();
  list.forEach((history) => {
    addList(history);
  });
  setDeleteEvent()
}

export function resetData() {
  while (HISTORY_DIV.firstChild) {
    HISTORY_DIV.removeChild(HISTORY_DIV.firstChild);
  }
}

function setDeleteEvent() {
  const deleteButtons = document.querySelectorAll("button.delete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const indexToDelete = event.target.getAttribute("data-index");
      const index = parseInt(indexToDelete, 10);

      HISTORY_LIST.forEach((history, i) => {
        if (index === history[4]) {
          HISTORY_LIST.splice(i, 1);
          const listItem = event.target.parentElement;
          listItem.remove();
        }
      });
      setAssetData();
    });
  });
}

