// 모달 기능 구현
const openBtn = document.querySelector(".subBtn");
const closeBtn = document.querySelector(".closeBtn");
const modal = document.querySelector(".subModal");
const email = document.getElementById("email");
const form = document.querySelector(".inputWrapper");
const topBtn = document.querySelector(".topBtn");
const container = document.querySelector(".imgSection2ImgContainer");
const imagesWrapper = document.querySelector(".imgSection2ImgWrapper");
const images = document.querySelectorAll(".catImg");
const prevBtn = document.querySelector(".carouselBtnLeft");
const nextBtn = document.querySelector(".carouselBtnRight");
const menuImg = document.querySelector(".mobileHeaderMenuImg");
const closeMenuImg = document.querySelector(".closeMenuImg");
const mobileMenuContainer = document.querySelector(".mobileMenuContainer");
const mobileMenu = document.querySelector(".mobileHeaderMenu");
let currentIndex = 0;
const slideWidth = images[0].clientWidth;

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

menuImg.addEventListener("click", () => {
  mobileMenuContainer.classList.add("open");
  mobileMenu.classList.add("open");
});

closeMenuImg.addEventListener("click", () => {
  mobileMenuContainer.classList.remove("open");
  mobileMenu.classList.remove("open");
});

// 오른쪽 화살표 클릭 시
nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > images.length - 1) {
    currentIndex = 0;
  }
  slideImages();
});

// 왼쪽 화살표 클릭 시
prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  slideImages();
});

function slideImages() {
  const offset = -currentIndex * slideWidth;
  imagesWrapper.style.transform = `translateX(${offset}px)`;
}

// 화면 로드 후 첫 번째 이미지 표시
slideImages();

document.addEventListener("click", (event) => {
  // 클릭된 요소가 모바일 메뉴 토글 이미지 자신이거나, 모바일 메뉴 컨테이너 내부 요소이면 무시
  if (event.target === menuImg || mobileMenu.contains(event.target)) {
    return;
  }

  // 모바일 메뉴가 열려있으면 닫기
  if (mobileMenuContainer.classList.contains("open")) {
    mobileMenuContainer.classList.remove("open");
    mobileMenu.classList.remove("open");
  }
});
