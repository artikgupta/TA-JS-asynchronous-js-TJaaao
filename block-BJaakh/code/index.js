let text = document.getElementById("text");
let root = document.querySelector("ul");
let all = document.querySelector(".all");
let complete = document.querySelector(".complete");
let incomplete = document.querySelector(".incomplete");
let clear = document.querySelector(".clear");
let toggleSelect = document.getElementById("toggleSelect");
let list = document.querySelector(".list-box");
let borders = document.querySelector(".borders");

// let allTodos = [];

toggleSelect.addEventListener("click", () => {
  let isCompletedAll = allTodos.every((obj) => obj.isCompleted === true);
  if (isCompletedAll) {
    allTodos = allTodos.map((todo) => {
      todo.isCompleted = false;
      return todo;
    });
    clear.style.display = "none";
  } else {
    allTodos = allTodos.map((todo) => {
      todo.isCompleted = true;
      return todo;
    });
    clear.style.display = "block";
  }
  createUI(allTodos);
  //   localStorage.setItem("allTodos", JSON.stringify(allTodos));
});

clear.addEventListener("click", () => {
  allTodos.length = 0;
  createUI(allTodos);
  //   localStorage.setItem("allTodos", JSON.stringify(allTodos));
});

function handleEvent(event) {
  if (event.keyCode === 13) {
    let todo = {
      todo: {
        title: event.target.value,
        isCompleted: false,
      },
    };

    // allTodos.push(todo);
    text.value = "";
    postData(todo);
    // createUI(allTodos);
    // localStorage.setItem("allTodos", JSON.stringify(allTodos));
    list.style.display = "flex";
    borders.style.display = "flex";
  }
}

function todoHandler(event) {
  let id = event.currentTarget.dataset.id;
  if (event.target.tagName == "SPAN") {
    deleteData(id);
  } else if (event.target.tagName == "INPUT") {
    let todo = {
      todo: {
        isCompleted: event.target.checked,
      },
    };
    update(id, todo);
  }
  //   createUI();
  //   localStorage.setItem("allTodos", JSON.stringify(allTodos));
}

function handleToggle(event) {
  let id = event.target.dataset.id;
  allTodos[id].isCompleted = !allTodos[id].isCompleted;
  createUI(allTodos);
  localStorage.setItem("allTodos", JSON.stringify(allTodos));
}

function createUI(todos = []) {
  root.innerHTML = "";
  todos.forEach((todo, index) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    // input.setAttribute("data-id", index);
    input.addEventListener("click", todoHandler);
    input.checked = todo.isCompleted;
    let p = document.createElement("p");
    p.innerText = todo.title;
    if (todo.isCompleted === true) {
      p.classList.add("strike");
    }
    let cancelBtn = document.createElement("span");
    cancelBtn.innerText = "X";
    cancelBtn.classList.add("cancel");
    li.setAttribute("data-id", todo._id);
    // cancelBtn.addEventListener("click", removeTodo);
    li.addEventListener("click", todoHandler);
    li.append(input);
    li.append(p);
    li.append(cancelBtn);
    root.append(li);
  });
}

all.addEventListener("click", () => {
  createUI(allTodos);
});

complete.addEventListener("click", () => {
  let completed = allTodos.filter((v) => v.isCompleted === true);
  createUI(completed);
});

incomplete.addEventListener("click", () => {
  let incomplete = allTodos.filter((v) => v.isCompleted === false);
  createUI(incomplete);
});

text.addEventListener("keyup", handleEvent);

function getData() {
  fetch("https://ac-todo-api.herokuapp.com/api/todo")
    .then((response) => response.json())
    .then((data) => {
      createUI(data.todos);
    })
    .catch((err) => console.error(err));
}

getData();

function postData(data) {
  fetch("https://ac-todo-api.herokuapp.com/api/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      createUI(data.todos);
    })
    .catch((err) => console.error(err));
}

function deleteData(id) {
  fetch(`https://ac-todo-api.herokuapp.com/api/todo/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      createUI(data.todos);
    })
    .catch((err) => getData());
}

function update(id, data) {
  fetch(`https://ac-todo-api.herokuapp.com/api/todo/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      createUI(data.todos);
    })
    .catch((err) => getData());
}
