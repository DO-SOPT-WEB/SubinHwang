import { CATEGORY, HISTORY_LIST, MESSAGE, TRANSACTION_TYPE } from "./utils/constants.js";
import { renderHistoryList } from "./utils/historyDataRender.js";
import { renderAssetData } from "./utils/assetDataRender.js";
const selectorWrapper = document.querySelector(".select-category");
const selector = document.querySelector(".selector");
const categories = document.querySelectorAll(".categories .category");
const selectedCategory = document.querySelector(".selected-category");
const modalBackground = document.querySelector("#modal-background");
selector.addEventListener("click", (event) => {
  selectorWrapper.classList.add("active");
});

categories.forEach((category) => {
  category.addEventListener("click", (event) => {
    let selectedCategoryText;
    if (event.target.tagName === "P") {
      selectedCategoryText = event.target.innerText;
    }
    if (event.target.tagName === "LI") {
      selectedCategoryText = event.target.querySelector("p").innerText;
    }
    selectedCategory.innerText = selectedCategoryText;
    selectorWrapper.classList.remove("active");
  });
});

const selectIncome = document.querySelector("#select-income");
const selectSpending = document.querySelector("#select-spending");
const typeIncomeList = document.querySelectorAll(".categories .type-income");
const typeSpendingList = document.querySelectorAll(
  ".categories .type-spending"
);

selectIncome.addEventListener("change", () => {
  if (selectIncome.checked) {
    renderCategory(TRANSACTION_TYPE.INCOME,CATEGORY.INCOME)
    typeIncomeList.forEach((category) => {
      category.style.display = "block";
    });
    typeSpendingList.forEach((category) => {
      category.style.display = "none";
    });
  }
  selectedCategory.innerText = typeIncomeList[0].querySelector("p").innerText;
});

selectSpending.addEventListener("change", () => {
  renderCategory(TRANSACTION_TYPE.SPENDING,CATEGORY.SPENDING);
  if (selectSpending.checked) {
    typeSpendingList.forEach((category) => {
      category.style.display = "block";
    });
    typeIncomeList.forEach((category) => {
      category.style.display = "none";
    });
  }
  selectedCategory.innerText = typeSpendingList[0].querySelector("p").innerText;
});

const addHistoryButton = document.querySelector("button#add");
const modal = document.querySelector("#add-history-modal");

addHistoryButton.addEventListener("click", () => {
  modalBackground.style.display = "block";
  modal.style.bottom = 0;
});
const closeModalButton = document.querySelector("#close");
closeModalButton.addEventListener("click", () => {
  modalBackground.style.display = "none";
  modal.style.bottom = "-60%";
});
const priceInput = document.querySelector("#input-price");
const contentInput = document.querySelector("#input-content");
const saveButton = document.querySelector("#save");
saveButton.addEventListener("click", () => {
  let transactionType;
  if (selectSpending.checked) {
    transactionType = 0;
  } else {
    transactionType = 1;
  }
  const price = parseInt(priceInput.value);
  const content = contentInput.value;
  const category = selectedCategory.innerText;
  console.log(price)
  if (price !== NaN || !content || category === MESSAGE.CATEGORY_UNSELECTED) {
    alert(MESSAGE.EMPTY_FIELD);
    priceInput.value = "";
    contentInput.value = "";
  } else {
    HISTORY_LIST.push([
      HISTORY_LIST.length - 1,
      transactionType,
      category,
      content,
      price,
    ]);
    renderHistoryList();
    renderAssetData();
    alert(MESSAGE.ADD_LIST_SUCCESS);
    priceInput.value = "";
    contentInput.value = "";
  }
});

function renderCategory(type,categoryList){
  resetCategory();
  Object.keys(categoryList).forEach(function (key) {
    console.log(categoryList[key]);
    createCategoryList(type,categoryList[key])
  });
}

const dropDownCategories = document.querySelector("ul.categories");
function createCategoryList(type, category){
const dropDownList = document.createElement("li");
dropDownList.className = "category";
(type === TRANSACTION_TYPE.INCOME)
  ? dropDownList.classList.add("type-income")
  : dropDownList.classList.add("type-spending");


dropDownList.innerHTML = category;
dropDownCategories.appendChild(dropDownList)
}

function resetCategory(){
  while (dropDownCategories.firstChild) {
    dropDownCategories.removeChild(dropDownCategories.firstChild);
  }
}

const PRICE_INPUT_FIELD = document.querySelector("#input-price");
PRICE_INPUT_FIELD.addEventListener("input",(e)=>{
  if(isNaN(e.data)){
    alert("숫자만 입력할 수 있어요");
    PRICE_INPUT_FIELD.value = "";
  }
})