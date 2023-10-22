const INIT_BALANCE = 0;

const HISTORY_LIST = [
  [1, "용돈", "생활비", 1200000], //지출 : 0, 수입 : 1
  [0, "교통", "티머니", 6200],
  [1, "쇼핑", "쿠팡환불", 27000],
  [0, "이체", "홍길동", 3000],
];
const historyDiv = document.querySelector("#history ul");
const totalMoney = document.querySelector("#asset #money");

function setTotalMoney(){
  
  let total = INIT_BALANCE;
HISTORY_LIST.forEach((history) =>{
  if(history[0] === 0){
    total -= history[3]
  }
  if(history[0] === 1)
    total += history[3]
})
totalMoney.innerHTML = total;
}

function addList() {
  HISTORY_LIST.forEach((history) => {
    const list = document.createElement("li");
    list.append(
      makeTagElement(history[1]),
      makeNameElement(history[2]),
      makePriceElement(history[0], history[3]),
      makeDeleteButton()
    );
    historyDiv.appendChild(list);
  });
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
    historyPrice.className = "spending";
  }
  if (type === 1) {
    historyPrice.className = "income";
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

addList();
setTotalMoney();