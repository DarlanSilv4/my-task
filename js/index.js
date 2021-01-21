function onKey() {
  let inputTask = document.getElementsByClassName(
    "new-task-area__input-task"
  )[0];

  inputTask.addEventListener("keyup", (event) => {
    if (event.key == "Enter" && inputTask.value) {
      newTask();
    }
  });
}

onKey();
