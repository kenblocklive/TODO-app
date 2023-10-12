//task 1 = 1m 30s
// const taskList = document.getElementsByTagName("ul")[0];
// console.log(taskList);

//task 2 = 5m
// const list = document.getElementsByTagName("li");
// for (let i = 0; i < list.length; i++) {
//   if (list[i].className === "completed") {
//     console.log(list[i]);
//   }
// }
//task 3 = 15s
// const list = document.getElementsByTagName("li");
// for (let i = 0; i < list.length; i++) {
//   if (list[i].className != "completed") {
//     console.log(list[i]);
//   }
// }

//task 4 = 5m

// const list = document.getElementsByTagName("li");
// for (let i = 0; i < list.length; i++) {
//   console.log(list[i].innerText);
// }

//task5 = 12m 35s

// const list = document.getElementsByTagName("li");
// for (let i = 0; i < list.length; i++) {
//   list[i].addEventListener("click", () => {
//     list[i].setAttribute("class", "completed");
//   });
// }

//task 6 = 1m 7s

// const list = document.getElementsByTagName("li");
// function removeAttributes(atribute) {
//   for (let i = 0; i < list.length; i++) {
//     list[i].addEventListener("click", () => {
//       list[i].classList.remove(atribute);
//     });
//   }
// }
// removeAttributes("completed");

// task 7 = 30m
// const list = document.getElementsByTagName("li");
// function changeStatus() {
//   for (let i = 0; i < list.length; i++) {
//     list[i].addEventListener("click", () => {
//       list[i].classList.toggle("completed");
//     });
//   }
// }
// changeStatus();

//task 8 = 50s

// const button = document.getElementsByTagName("button")[0];
// console.log(button);

//task 9 = 1m 30s
// const button = document.getElementsByTagName("button")[0];

// function addTask() {
//   button.addEventListener("click", () => {
//     alert("Add Task");
//   });
// }
// addTask();

//task 10 = 45s

// const input = document.getElementsByTagName("input")[0];
// console.log(input);

//task 11 = 30s
// const input = document.getElementsByTagName("input")[0];
// console.log(input.value);

//task 12 = 1m 30s
// const input = document.getElementsByTagName("input")[0];
// const button = document.getElementsByTagName("button")[0];
// function name() {
//   button.addEventListener("click", () => {
//     alert(input.value);
//   });
// }
// name();

//task 12 = 3m 12s

// const input = document.getElementsByTagName("input")[0];
// const button = document.getElementsByTagName("button")[0];

// function name() {
//   button.addEventListener("click", () => {
//     input.value = null;
//   });
// }
// name();

//task 13 = 3m 53s
// const input = document.getElementsByTagName("input")[0];
// const button = document.getElementsByTagName("button")[0];
// const list = document.getElementsByTagName("ul")[0];
// button.addEventListener("click", () => {
//   const listItem = document.createElement("li");
//   listItem.textContent = input.value;
//   list.appendChild(listItem);
// });
