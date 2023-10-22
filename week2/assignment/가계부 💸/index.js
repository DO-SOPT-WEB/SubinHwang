const INIT_BALANCE = 0;
const INIT_INCOME = 0;
const INIT_SPENDING = 0;

const HISTORY_LIST = [
  [1, "용돈", "생활비", 1200000], //지출 : 0, 수입 : 1
  [0, "교통", "티머니", 6200],
  [1, "쇼핑", "쿠팡환불", 27000],
  [0, "이체", "홍길동", 3000],
];
const historyDiv = document.querySelector("#history ul");
const totalMoney = document.querySelector("#asset #money");
const todayTotalIncome = document.querySelector("#today .income");
const todayTotalSpending = document.querySelector("#today .spending");

let total = INIT_BALANCE;
let income = INIT_INCOME;
let spending = INIT_SPENDING;

function calculateMoney(history) {
  if (history[0] === 0) {
    total -= history[3];
    spending += history[3];
  }
  if (history[0] === 1) {
    total += history[3];
    income += history[3];
  }
}

function setMoney() {
  totalMoney.innerHTML = total;
  todayTotalIncome.innerHTML = income;
  todayTotalSpending.innerHTML = spending;
}

function addList(history) {
  const list = document.createElement("li");
  list.append(
    makeTagElement(history[1]),
    makeNameElement(history[2]),
    makePriceElement(history[0], history[3]),
    makeDeleteButton()
  );
  historyDiv.appendChild(list);
}
function makeTagElement(tag) {
  const historyTag = document.createElement("p");
  historyTag.className = "tag";
  historyTag.innerHTML = tag;
  console.log(historyTag);
  return historyTag;
}

function makeNameElement(name) {
  const historyName = document.createElement("p");
  historyName.className = "name";
  historyName.innerHTML = name;
  return historyName;
}

function makePriceElement(type, price) {
  const historyPrice = document.createElement("p");
  historyPrice.className = "price";
  if (type === 0) {
    historyPrice.classList.add("spending");
  }
  if (type === 1) {
    historyPrice.classList.add("income");
  }
  historyPrice.innerText = price;
  return historyPrice;
}

function makeDeleteButton() {
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  deleteButton.innerText = "✕";
  return deleteButton;
}

function setInitData() {
  HISTORY_LIST.forEach((history) => {
    addList(history);
    calculateMoney(history);
  });
  setMoney();
}

setInitData();
