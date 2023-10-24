import { HISTORY_LIST } from "./utils/constants.js";
import { renderHistoryList } from "./utils/hisoryDataRender.js";
import { renderAssetData } from "./utils/assetDataRender.js";
const selectorWrapper = document.querySelector(".select-category");
const selector = document.querySelector(".selector");
const categories = document.querySelectorAll(".categories .category");
const selectedCategory = document.querySelector(".selected-category");
const modalBackground = document.querySelector("#modal-background")
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
    modalBackground.style.display="block";
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
  console.log(price);
  const content = contentInput.value;
  console.log(content);
  const category = selectedCategory.innerText;
  HISTORY_LIST.push([
    HISTORY_LIST.length - 1,
    transactionType,
    category,
    content,
    price,
  ]);
  renderHistoryList();
  renderAssetData();
  alert("내역이 추가되었어요!")
});
