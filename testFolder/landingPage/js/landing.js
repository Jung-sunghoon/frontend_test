// 모달 기능 구현
const openBtn = document.querySelector(".subBtn");
const closeBtn = document.querySelector(".closeBtn");
const modal = document.querySelector(".subModal");
const email = document.getElementById("email");
const form = document.querySelector(".inputWrapper");
const topBtn = document.querySelector(".topBtn");
const container = document.querySelector(".imgSection2ImgContainer");
const images = document.querySelector(".catImg");
const prevBtn = document.querySelector(".carouselBtnLeft");
const nextBtn = document.querySelector(".carouselBtnRight");
let currentIndex = 0;

form.addEventListener("submit", function (event) {
  event.preventDefault(); // 기본 폼 제출 막기

  // 이메일 유효성 검사
  if (email.checkValidity()) {
    modal.classList.add("on"); // 모달 열기
  } else {
    alert("Please enter a valid email address.");
  }
});

closeBtn.addEventListener("click", function (event) {
  event.preventDefault();
  modal.classList.remove("on");
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    topBtn.classList.add("top");
  } else {
    topBtn.classList.remove("top");
  }
});

topBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
