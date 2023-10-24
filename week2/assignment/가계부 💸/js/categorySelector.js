const selectorWrapper = document.querySelector(".select-category");
const selector = document.querySelector(".selector");
const categories = document.querySelectorAll(".categories .category");
const selectedCategory = document.querySelector(".selected-category");
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
