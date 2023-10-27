import { CATEGORY, TRANSACTION_TYPE } from "../utils/constants.js";
import {
  HOME_BUTTON,
  INCOME_CATEGORY_INPUT,
  INCOME_CATEGORY_SECTION,
  SPENDING_CATEGORY_INPUT,
  SPENDING_CATEGORY_SECTION,
} from "../utils/documentElements.js";

HOME_BUTTON.addEventListener("click", () => {
  window.location.href = "../index.html";
});

function addToCategoryList(type, name) {
  const categoryList =
    type === TRANSACTION_TYPE.INCOME ? CATEGORY.INCOME : CATEGORY.SPENDING;
  categoryList.push(name);
}

function appendCategoryTagElement(name, categorySection) {
  const CATEGORY_TAG = document.createElement("div");
  CATEGORY_TAG.className = "category-tag";
  CATEGORY_TAG.innerHTML = name;
  categorySection.appendChild(CATEGORY_TAG);
}

function saveToLocalStorage(type) {
  const storageKey =
    type === TRANSACTION_TYPE.INCOME
      ? "categories-income"
      : "categories-spending";
  const categoryList =
    type === TRANSACTION_TYPE.INCOME ? CATEGORY.INCOME : CATEGORY.SPENDING;
  localStorage.setItem(storageKey, JSON.stringify(categoryList));
}

function handleCategoryInput(type, inputField, categorySection) {
  inputField.addEventListener("keydown", (event) => {
    if (event.isComposing) return; // 중복 입력 방지
    if (event.key === "Enter") {
      const categoryName = event.target.value;
      addToCategoryList(type, categoryName);
      appendCategoryTagElement(categoryName, categorySection);
      saveToLocalStorage(type);
      inputField.value = "";
    }
  });
}

function renderCategoryTag(type, categorySection) {
  const categoryList =
    type === TRANSACTION_TYPE.INCOME ? CATEGORY.INCOME : CATEGORY.SPENDING;
  categoryList.forEach((category) => {
    appendCategoryTagElement(category, categorySection);
  });
}

renderCategoryTag(TRANSACTION_TYPE.INCOME, INCOME_CATEGORY_SECTION);
renderCategoryTag(TRANSACTION_TYPE.SPENDING, SPENDING_CATEGORY_SECTION);

handleCategoryInput(
  TRANSACTION_TYPE.INCOME,
  INCOME_CATEGORY_INPUT,
  INCOME_CATEGORY_SECTION
);
handleCategoryInput(
  TRANSACTION_TYPE.SPENDING,
  SPENDING_CATEGORY_INPUT,
  SPENDING_CATEGORY_SECTION
);
