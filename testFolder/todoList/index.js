"use strict";

let itemList = [];
let itemId = 0;

const inputForm = document.querySelector(".inputForm");
const itemInput = document.querySelector(".itemInput");
const todoListSection = document.querySelector(".todoListSection");

// 리스트 렌더링 함수
const renderItemList = () => {
  let list = itemList.length ? "<ul>" : "";

  itemList.forEach((item) => {
    list += `
      <li>
        <label for="todoItem">${item.text}</label>
        <div>
          <input type="checkbox" id="todoItem" />
          <button type="button" class="delBtn" data-id="${item.id}">삭제</button>
        </div>
      </li>
    `;
  });

  list += itemList.length ? "</ul>" : "";

  todoListSection.innerHTML = list;
};

// 리스트 아이템 추가 함수
const addListItem = () => {
  const newItemText = itemInput.value.trim();
  if (!newItemText) {
    alert("항목을 입력하세요.");
    itemInput.focus();
    return;
  }

  const newItem = {
    text: newItemText,
    id: itemId++,
  };
  itemList.push(newItem);

  itemInput.value = "";
  itemInput.focus();

  renderItemList();
};

// 아이템 삭제 함수
const delListItem = (itemId) => {
  if (confirm("삭제하시겠습니까?")) {
    itemList = itemList.filter((item) => item.id !== Number(itemId));
    renderItemList();
  }
};

// 아이템 체크 or 삭제 이벤트 핸들러
todoListSection.addEventListener("click", function (e) {
  const target = e.target;
  if (target.classList.contains("delBtn")) {
    delListItem(target.dataset.id);
  } else if (target.tagName === "INPUT") {
    target.parentNode.parentNode.classList.toggle("complete");
  }
});

// input Form 이벤트 핸들러(기본 동작 막고 아이템 추가)
inputForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addListItem();
});

// 초기 렌더링
renderItemList();
