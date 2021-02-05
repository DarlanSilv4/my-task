import { newTask } from './newTask.js';
import { load } from './loadTasks.js';
const inputTask = document.getElementsByClassName("new-task-area__input-task")[0];
const inputDate = document.getElementsByClassName("new-task-area__input-date")[0];

inputTask.addEventListener("keyup", (event) => {
  if (event.key == "Enter" && inputTask.value && inputDate.value) {
    const tasks = newTask();
    load(tasks);
  }
});
