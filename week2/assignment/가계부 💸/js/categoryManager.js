import { CATEGORY } from "./utils/constants.js";

const HOME_BUTTON = document.querySelector("#go-home-button");
HOME_BUTTON.addEventListener("click", () => {
  window.location.href = "./index.html";
});

const INCOME_CATEGORY_SECTION = document.querySelector("#income-category");

console.log(CATEGORY.INCOME);
CATEGORY.INCOME.forEach((category) => {
  const CATEGORY_TAG = document.createElement("div");
  CATEGORY_TAG.className = "category-tag";
  CATEGORY_TAG.innerHTML = category;
  INCOME_CATEGORY_SECTION.appendChild(CATEGORY_TAG);
});

const SPENDING_CATEGORY_SECTION = document.querySelector("#spending-category");

CATEGORY.SPENDING.forEach((category) => {
  const CATEGORY_TAG = document.createElement("div");
  CATEGORY_TAG.className = "category-tag";
  CATEGORY_TAG.innerHTML = category;
  SPENDING_CATEGORY_SECTION.appendChild(CATEGORY_TAG);
});

const INPUT_INCOME_CATEGORY = document.querySelector("#input-income-category");

INPUT_INCOME_CATEGORY.addEventListener("keydown", (event) => {
  if (event.isComposing) return; //끝 글자가 한번 더 입력되는 현상을 방지
  if (event.key === "Enter") {
    CATEGORY.INCOME.push(INPUT_INCOME_CATEGORY.value);
    localStorage.setItem("categories-income", JSON.stringify(CATEGORY.INCOME));
    const CATEGORY_TAG = document.createElement("div");
    CATEGORY_TAG.className = "category-tag";
    CATEGORY_TAG.innerHTML = INPUT_INCOME_CATEGORY.value;
    INCOME_CATEGORY_SECTION.appendChild(CATEGORY_TAG);
    INPUT_INCOME_CATEGORY.value = "";
  }
});

const INPUT_SPENDING_CATEGORY = document.querySelector(
  "#input-spending-category"
);

INPUT_SPENDING_CATEGORY.addEventListener("keydown", (event) => {
  if (event.isComposing) return; //끝 글자가 한번 더 입력되는 현상을 방지
  if (event.key === "Enter") {
    CATEGORY.SPENDING.push(INPUT_SPENDING_CATEGORY.value);
    localStorage.setItem(
      "categories-spending",
      JSON.stringify(CATEGORY.SPENDING)
    );
    const CATEGORY_TAG = document.createElement("div");
    CATEGORY_TAG.className = "category-tag";
    CATEGORY_TAG.innerHTML = INPUT_SPENDING_CATEGORY.value;
    SPENDING_CATEGORY_SECTION.appendChild(CATEGORY_TAG);
    INPUT_SPENDING_CATEGORY.value = "";
  }
});
