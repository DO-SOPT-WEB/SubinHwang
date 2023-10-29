import { CATEGORY, ELEMENT, TRANSACTION_TYPE } from "../utils/constants.js";
import {
  DROP_DOWN_CATEGORIES,
  SELECTED_CATEGORY,
  SELECTOR_DIV,
  SELECT_TYPE_INCOME,
  SELECT_TYPE_SPENDING,
} from "../utils/documentElements.js";

function handleSelectChange() {
  SELECT_TYPE_INCOME.addEventListener("change", () => {
    renderCategory(TRANSACTION_TYPE.INCOME, CATEGORY.INCOME);
    SELECTED_CATEGORY.innerText = CATEGORY.INCOME[0];
  });

  SELECT_TYPE_SPENDING.addEventListener("change", () => {
    renderCategory(TRANSACTION_TYPE.SPENDING, CATEGORY.SPENDING);
    SELECTED_CATEGORY.innerText = CATEGORY.SPENDING[0];
  });
}

function handleCategoryClick() {
  const categories = document.querySelectorAll(".categories .category");
  categories.forEach((category) => {
    category.addEventListener("click", (event) => {
      const selectedCategoryText = event.target.innerText;
      SELECTED_CATEGORY.innerText = selectedCategoryText;
      SELECTOR_DIV.classList.remove(ELEMENT.CLASSNAME.ACTIVE);
    });
  });
}

function createCategoryList(type, category) {
  const dropDownList = document.createElement(ELEMENT.HTMLTAG.LIST);
  dropDownList.className = ELEMENT.CLASSNAME.CATEGORY;
  type === TRANSACTION_TYPE.INCOME
    ? dropDownList.classList.add(ELEMENT.CLASSNAME.TYPE_INCOME)
    : dropDownList.classList.add(ELEMENT.CLASSNAME.TYPE_SPENDING);
  dropDownList.innerHTML = category;
  DROP_DOWN_CATEGORIES.appendChild(dropDownList);
  handleCategoryClick();
}

function resetCategory() {
  while (DROP_DOWN_CATEGORIES.firstChild) {
    DROP_DOWN_CATEGORIES.removeChild(DROP_DOWN_CATEGORIES.firstChild);
  }
}

export function renderCategory(type, categoryList) {
  if (!type & !categoryList) {
    type = TRANSACTION_TYPE;
    categoryList = CATEGORY.INCOME;
    handleCategoryClick();
  }
  resetCategory();
  categoryList.forEach((category) => {
    createCategoryList(type, category);
  });
  handleSelectChange();
}
