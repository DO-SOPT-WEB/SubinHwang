const mango = document.createElement("li");
const mangoText = document.createTextNode("mango"); // or mango.innerText = "mango"

mango.appendChild(mangoText);
const fruitList = document.querySelector("ul");
fruitList.appendChild(mango);

const redFruit = document.querySelectorAll(".red");
redFruit.forEach((fruit) => {
  fruit.remove();
});

const thirdFruit = document.querySelector("li:nth-child(3)");
thirdFruit.classList.add("blue");

const lengthButton = document.querySelector("button.count");
lengthButton.addEventListener("click", showLength);

const allList = document.querySelectorAll("li");

function showLength() {
  alert(`과일 개수는 ${allList.length}개 입니다`);
}
