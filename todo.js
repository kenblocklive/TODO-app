const input = document.getElementsByTagName("input")[0];
const button = document.getElementsByTagName("button")[0];
const list = document.getElementsByTagName("ul")[0];
const listItem = document.getElementsByTagName("li");

function addTask() {
  button.addEventListener("click", () => {
    const listItem = document.createElement("li");
    listItem.textContent = input.value;
    list.appendChild(listItem);
  });
}
addTask();

function changeStatus() {
  for (let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener("click", () => {
      if (listItem[i].className === "completed") {
        listItem[i].removeAttribute("class");
      } else {
        listItem[i].setAttribute("class", "completed");
      }
    });
  }
}
changeStatus();

function cleanInput() {
  button.addEventListener("click", () => {
    input.value = null;
  });
}
cleanInput();
