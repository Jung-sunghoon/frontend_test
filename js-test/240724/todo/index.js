const $input = document.querySelector("input");
const $button = document.querySelector(".addBtn");
const $form = document.querySelector("form");
const $ul = document.querySelector("ul");

const fetchTodos = async () => {
  $ul.innerHTML = "";

  try {
    const res = await fetch("http://localhost:3000/todos");
    const todos = await res.json();

    todos.forEach((todo) => {
      const $li = document.createElement("li");
      const $label = document.createElement("label");
      const $div = document.createElement("div");
      const $checkBtn = document.createElement("input");
      const $deleteBtn = document.createElement("button");

      $li.id = todo.id;

      $checkBtn.type = "checkbox";
      $checkBtn.id = todo.id;

      if (todo.done == true) {
        $checkBtn.checked = true;
        $li.classList.add("checked");
      } else {
        $li.classList.remove("checked");
      }

      $checkBtn.addEventListener("click", () => checkTodo(todo.id));

      $deleteBtn.innerText = "삭제";
      $deleteBtn.addEventListener("click", () => deleteTodo(todo.id));

      $label.innerText = todo.todo;
      $label.htmlFor = todo.id;

      $div.append($checkBtn, $deleteBtn);

      $li.append($label, $div);

      $ul.appendChild($li);
    });
  } catch (error) {
    console.log(error);
  }
};
fetchTodos();

const addTodo = async () => {
  const todoInput = $input.value;
  const newTodo = {
    todo: todoInput,
    done: false,
  };

  if (!todoInput) {
    alert("텍스트를 입력하시오");
    return;
  }
  try {
    await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
  } catch (error) {
    console.log(error);
  }

  fetchTodos();
};

const deleteTodo = async (id) => {
  try {
    if (confirm("삭제하시겠습니까?")) {
      await fetch("http://localhost:3000/todos/" + id, {
        method: "DELETE",
      });

      fetchTodos();
    }
    return;
  } catch (error) {
    console.log(error);
  }
};

const checkTodo = async (id) => {
  const res = await fetch("http://localhost:3000/todos/" + id);
  const todo = await res.json();

  const updatedTodo = {
    done: !todo.done,
  };

  try {
    await fetch("http://localhost:3000/todos/" + id, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    });
  } catch (error) {
    console.log(error);
  }

  fetchTodos();
};

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
  $input.value = "";
  $input.focus();
});
