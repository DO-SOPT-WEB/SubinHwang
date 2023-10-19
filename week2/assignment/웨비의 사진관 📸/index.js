document.addEventListener("scroll", () => {
  const topButton = document.querySelector("#top div");
  const opacity = scrollY / (document.body.scrollHeight - window.innerHeight);
  topButton.style.opacity = Math.min(opacity, 1); //opacity의 최댓값을 1로 설정하기 위함
});
