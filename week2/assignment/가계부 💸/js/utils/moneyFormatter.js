export function changeFormat() {
  const money = document.querySelectorAll(".money");
  money.forEach((text) => {
    let changedText = text.innerHTML
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    text.innerHTML = changedText;
  });
}

const input = document.querySelector("#input-price");
input.addEventListener("keyup", (e) => {
  let value = e.target.value;
  value = Number(value.replaceAll(",", ""));
  const formatValue = value.toLocaleString("ko-KR");
  input.value = formatValue;
});
