import { newTask } from './task/newTask.js';
import { load } from './task/loadTasks.js';
import { setupMobileMenu } from './mobile.js'
const inputTask = document.getElementsByClassName("new-task-area__input-task")[0];
const inputDate = document.getElementsByClassName("new-task-area__input-date")[0];

setupMobileMenu();
load();

inputTask.addEventListener("keyup", (event) => {
  if (event.key == "Enter" && inputTask.value && inputDate.value) {
    newTask();
    load();
  }
});