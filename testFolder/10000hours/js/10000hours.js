// js file

// form 태그 submit 메소드
document
  .getElementById("trainingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const subject = document.getElementById("subject").value;
    const time = document.getElementById("time").value;

    const hours = parseFloat(time);

    const totalHours = 10000;
    const daytimes = Math.ceil(totalHours / hours);

    document.getElementById("subjectResult").textContent = subject;
    document.getElementById("daysResult").textContent = daytimes;
  });

// Modal 메소드
const modal = document.querySelector(".cheerModal");
const openBtn = document.querySelector(".modalBtn");
const closeBtn = document.querySelector(".closeBtn");

openBtn.addEventListener("click", function () {
  modal.classList.add("on");
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("on");
});
