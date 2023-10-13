const input = document.getElementsByTagName("input")[0];
const button = document.getElementsByTagName("button")[0];
const list = document.getElementsByTagName("ul")[0];
const listItems = list.getElementsByTagName("li");

button.addEventListener("click", () => {
  const listItem = document.createElement("li");
  const buttonDelete = document.createElement("button");
  buttonDelete.textContent = "Delete";
  listItem.textContent = input.value;
  listItem.appendChild(buttonDelete);
  list.appendChild(listItem);
  newEvent(listItem);
  input.value = null;
});

function newEvent(listItem) {
  listItem.addEventListener("click", () => {
    if (listItem.className === "completed") {
      listItem.removeAttribute("class");
    } else {
      listItem.setAttribute("class", "completed");
    }
  });
}
