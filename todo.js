const input = document.getElementsByTagName("input")[0];
const button = document.getElementsByTagName("button")[0];
const list = document.getElementsByTagName("ul")[0];
const listItems = list.getElementsByTagName("li");

button.addEventListener("click", () => {
  const listItem = document.createElement("li");
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  listItem.textContent = input.value;
  listItem.prepend(checkBox);
  list.appendChild(listItem);
  newEvent(listItem, checkBox);
  input.value = null;
});

function newEvent(listItem, checkBox) {
  checkBox.addEventListener("click", () => {
    listItem.classList.toggle("completed");
  });
}
