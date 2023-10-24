const wishList = JSON.parse(localStorage.getItem("wishList")) || [];
const input = document.getElementsByTagName("input")[0];
const button = document.getElementsByTagName("button")[0];
const list = document.getElementsByTagName("ul")[0];
button.addEventListener("click", () => addTask());

function addTask() {
  const id = +(Math.random() * 100).toFixed(0);
  const wishItem = {
    id: id,
    name: input.value,
    isCompleted: false,
  };
  wishList.push(wishItem);
  localStorage.setItem("wishList", JSON.stringify(wishList));
  createTask(wishItem);
  input.value = null;
}

function toggleTask(id) {
  for (let j = 0; j < wishList.length; j++) {
    if (id === wishList[j].id) {
      wishList[j].isCompleted = !wishList[j].isCompleted;
      localStorage.setItem("wishList", JSON.stringify(wishList));
    }
  }

  const items = list.querySelectorAll("li[data-id]");

  for (let i = 0; i < items.length; i++) {
    if (id === +items[i].getAttribute("data-id")) {
      items[i].classList.toggle("completed");
      return;
    }
  }
}

function deleteTask(taskId) {
  const newWishList = wishList.filter((element) => taskId !== element.id);
  localStorage.setItem("wishList", JSON.stringify(newWishList));
  const items = list.getElementsByTagName("li");
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const id = item.getAttribute("data-id");
    if (+id === taskId) {
      list.removeChild(item);
      return;
    }
  }
}

for (let i = 0; i < wishList.length; i++) {
  const element = wishList[i];
  createTask(element);
}
function createTask(element) {
  const listItem = `
  <li class="${element.isCompleted ? "completed" : ""}" data-id="${element.id}">
    <input class="input-checkbox" type="checkbox" onchange="toggleTask(${
      element.id
    })"/>
    <span>${element.name}</span>
    <button class="btn-delete" onclick="deleteTask(${
      element.id
    })">Delete</button>
  </li>`;
  list.insertAdjacentHTML("afterBegin", listItem);
}
