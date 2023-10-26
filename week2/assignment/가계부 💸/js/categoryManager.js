import { CATEGORY } from "./utils/constants.js";

const HOME_BUTTON = document.querySelector("#go-home-button");
HOME_BUTTON.addEventListener("click",()=>{
window.location.href = "./index.html";
})

const INCOME_CATEGORY_SECTION = document.querySelector("#income-category");

Object.values(CATEGORY.INCOME).forEach(category =>{
    const CATEGORY_TAG = document.createElement('div');
    CATEGORY_TAG.className = "category-tag";
    CATEGORY_TAG.innerHTML = category
    INCOME_CATEGORY_SECTION.appendChild(CATEGORY_TAG);
})

const SPENDING_CATEGORY_SECTION = document.querySelector("#spending-category");

Object.values(CATEGORY.SPENDING).forEach((category) => {
  const CATEGORY_TAG = document.createElement("div");
  CATEGORY_TAG.className = "category-tag";
  CATEGORY_TAG.innerHTML = category;
  SPENDING_CATEGORY_SECTION.appendChild(CATEGORY_TAG);
});