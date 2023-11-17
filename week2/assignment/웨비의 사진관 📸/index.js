/* 스크롤에 따라 탑버튼을 점점 선명하게 만드는 함수 */
document.addEventListener("scroll", () => {
  const topButton = document.querySelector("#top div");
  const opacity = scrollY / (document.body.scrollHeight - window.innerHeight);
  topButton.style.opacity = Math.min(opacity, 1); //opacity의 최댓값을 1로 설정하기 위함
});

const detailBox = document.querySelectorAll(".detail");
const details = document.querySelectorAll(".detail p");

function createDetailButton() {
  const detailButton = document.createElement("button");
  detailButton.className = "read_more";
  detailButton.innerHTML = "더보기";
  return detailButton;
}

/* 디테일의 폰트크기와 높이를 이용하여 디테일버튼을 만들어야 할 지 결정하는 함수 */
function shouldShowButton(detail) {
  const detailHeight = window.getComputedStyle(detail).height.split("px")[0];
  const fontSize = window.getComputedStyle(detail).fontSize.split("px")[0];
  return detailHeight > fontSize * 3; //디테일이 세 줄 이상인지를 계산
}

function hideButton(button) {
  button.style.display = "none";
}

function showDetail(detail) {
  detail.style.display = "inline";
}

/* 조건에 따라 디테일 버튼을 만들고 디테일 버튼의 클릭이벤트를 처리하는 기능 */
detailBox.forEach((box, index) => {
  const detail = details[index];
  if (shouldShowButton(detail)) {
    const detailButton = createDetailButton();
    box.appendChild(detailButton);

    detailButton.addEventListener("click", () => {
      hideButton(detailButton);
      showDetail(detail);
    });
  }
});

/* preview 섹션 양쪽 끝으로 이동하는 기능 */
const startButton = document.querySelector(".start");
const endButton = document.querySelector(".end");
const previewSection = document.querySelector("#preview .gallery");

startButton.addEventListener("click", () => {
  const scrollOptions = {
    left: 0,
    behavior: "smooth",
  };

  previewSection.scrollTo(scrollOptions);
});

endButton.addEventListener("click", () => {
  const scrollOptions = {
    left: previewSection.scrollWidth,
    behavior: "smooth",
  };

  previewSection.scrollTo(scrollOptions);
});
