const selectBtn = document.querySelector(".btn-select");
const btnList = document.querySelectorAll(".list-member button");

selectBtn.addEventListener("click", function () {
  if (selectBtn.classList.contains("on")) {
    selectBtn.classList.remove("on");
  } else {
    selectBtn.classList.add("on");
  }
});

btnList.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const btnValue = event.target.textContent;
    selectBtn.textContent = btnValue;
  });
});
