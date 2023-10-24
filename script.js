const wishList = JSON.parse(localStorage.getItem("wishList")) || [];

function addTask(textTask) {
  if (!textTask) {
    return;
  }
  const id = +Math.random().toString().slice(2);
  const wishItem = {
    id: id,
    name: textTask,
    isCompleted: false,
  };
  wishList.push(wishItem);
  localStorage.setItem("wishList", JSON.stringify(wishList));
}

function toggleTask(id) {
  for (let j = 0; j < wishList.length; j++) {
    if (id === wishList[j].id) {
      wishList[j].isCompleted = !wishList[j].isCompleted;
      localStorage.setItem("wishList", JSON.stringify(wishList));
    }
  }
}

function deleteTask(taskId) {
  for (let i = 0; i < wishList.length; i++) {
    const element = wishList[i];
    if (taskId === element?.id) {
      wishList.splice(i, 1);
    }
  }
  localStorage.setItem("wishList", JSON.stringify(wishList));
}

function editTask(taskId, newTextTask) {
  const currentTask = wishList.find((element) => {
    return element.id === taskId;
  });
  currentTask.name = newTextTask;
  localStorage.setItem("wishList", JSON.stringify(wishList));
}
