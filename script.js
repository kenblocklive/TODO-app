const list = JSON.parse(localStorage.getItem("list")) || [];
const ul = document.querySelector("ul");
for (let i = 0; i < list.length; i++) {
  const listItem = list[i];
  createOnPage(listItem);
}

function addItem() {
  const input = document.querySelector("#todo-text");
  const item = {
    id: +Math.random().toString().slice(2),
    text: input.value,
    isCompleted: false,
  };
  list.push(item);
  updateStorage();
  createOnPage(item);
  input.value = "";
}

function deleteItem(id) {
  const index = list.findIndex((item) => item.id === id);
  const element = list.find((x) => x.id === id);
  list.splice(index, 1);
  updateStorage();
  deleteFromPage(element.id);
}

function changeStatus(id) {
  const element = list.find((element) => element.id === id);
  element.isCompleted = !element.isCompleted;
  updateStorage();
  changeStatusFromPage(id);
}

function updateStorage() {
  localStorage.setItem("list", JSON.stringify(list));
}

function createOnPage(item) {
  console.log(item);
  const li = `
  <li data-id="${item.id}" class="${item.isCompleted ? "completed" : null}">
  <input ${item.isCompleted ? "checked" : null}" onchange="changeStatus(${
    item.id
  })" type="checkbox" name="" id="" />
  <span>${item.text}</span>
  <button class="btn btn-error btn-circle" onclick="deleteItem(${item.id})">
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.947 5.17243H14.4697L14.4475 5.64919L14.027 14.6867C14.027 14.6871 14.027 14.6875 14.027 14.6879C14.007 15.0674 13.8795 15.3246 13.7075 15.487C13.535 15.6499 13.2694 15.7632 12.8878 15.7632H7.11843C6.7277 15.7632 6.46129 15.6498 6.29038 15.4888C6.12016 15.3285 5.99311 15.0727 5.97302 14.688C5.973 14.6876 5.97298 14.6872 5.97296 14.6868L5.55246 5.64919L5.53028 5.17243H5.053H4.36244C4.3381 5.17243 4.32324 5.16384 4.3144 5.15507C4.30612 5.14685 4.29742 5.133 4.29742 5.10742C4.29742 5.09344 4.30213 5.08276 4.31162 5.07349C4.32145 5.06389 4.33777 5.05496 4.36244 5.05496H7.13727H7.63727V4.55496V3.61327C7.63727 3.23935 7.75292 3.00142 7.91449 2.85277C8.08176 2.69886 8.3629 2.58147 8.80091 2.58147H11.1865C11.6245 2.58147 11.9057 2.69886 12.0729 2.85277C12.2345 3.00142 12.3502 3.23935 12.3502 3.61327V4.55496V5.05496H12.8502H15.6375C15.666 5.05496 15.682 5.06498 15.6898 5.07251C15.6939 5.07654 15.6968 5.08083 15.6987 5.0853C15.7005 5.08947 15.7026 5.09632 15.7026 5.10742C15.7026 5.13175 15.694 5.14661 15.6852 5.15545C15.677 5.16373 15.6631 5.17243 15.6375 5.17243H14.947ZM11.6762 5.05496H12.1762V4.55496V3.66978C12.1762 3.38635 12.0727 3.11535 11.8588 2.9183C11.6491 2.72507 11.3766 2.64243 11.1049 2.64243H8.88252C8.6108 2.64243 8.33837 2.72507 8.12862 2.9183C7.91474 3.11535 7.81124 3.38635 7.81124 3.66978V4.55496V5.05496H8.31124H11.6762ZM6.12932 14.5355L6.1294 14.5371C6.16004 15.1396 6.59982 15.6395 7.24399 15.6395H12.7497C13.0505 15.6395 13.3341 15.5312 13.5442 15.3166C13.7512 15.105 13.8541 14.8241 13.8645 14.5319L14.2725 5.69548L14.2966 5.17243H13.773H6.20814H5.68378L5.7087 5.69619L6.12932 14.5355Z"
      />
    </svg>
  </button>
</li>
  `;
  ul.insertAdjacentHTML("afterbegin", li);
}

function deleteFromPage(id) {
  const item = ul.querySelector(`li[data-id="${id}"]`);
  ul.removeChild(item);
}

function changeStatusFromPage(id) {
  const item = ul.querySelector(`li[data-id="${id}"]`);
  item.classList.toggle("completed");
}
