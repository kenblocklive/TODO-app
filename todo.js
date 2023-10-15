const input = document.getElementsByTagName("input")[0];
const button = document.getElementsByTagName("button")[0];
const list = document.getElementsByTagName("ul")[0]; // <ul></ul>

button.addEventListener("click", () => addTask());

function addTask() {
  const id = (Math.random() * 100).toFixed(0);
  const listItem = `
  <li data-id="${id}">
    <input type="checkbox"/>
    <span>${input.value}</span>
    <button onclick="deleteTask(${id})">Delete</button>
  </li>`;

  list.insertAdjacentHTML("afterBegin", listItem);
  const items = list.getElementsByTagName("li");
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const checkbox = item.getElementsByTagName("input")[0];
    const textTask = item.getElementsByTagName("span")[0];
    checkbox.addEventListener("input", () => toggleTask(textTask));
  }

  input.value = null;
}

function toggleTask(item) {
  item.classList.toggle("completed");
}

{
  /* <li data-id="12">
    <input type="checkbox"/>
    <span>${input.value}</span>
    <button onclick="deleteTask(12)">Delete</button>
  </li> */
}
function deleteTask(taskId) {
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
