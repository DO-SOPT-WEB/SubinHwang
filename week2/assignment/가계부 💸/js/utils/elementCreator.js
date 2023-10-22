import {
  TRANSACTION_TYPE,
  ELEMENT
} from "./constants.js";

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

export function makeDeleteButton() {
  const deleteButton = document.createElement(ELEMENT.HTMLTAG.BUTTON);
  deleteButton.className = ELEMENT.CLASSNAME.DELETE;
  return deleteButton;
}
