const selectBtn = document.querySelector(".btn-select");
const btnList = document.querySelector(".list-member");

selectBtn.addEventListener("click", function () {
  selectBtn.classList.toggle("on");
});

btnList.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    selectBtn.textContent = event.target.textContent;
  }
});
