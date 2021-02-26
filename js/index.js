import { newTask } from './newTask.js';
import { load } from './loadTasks.js';
const inputTask = document.getElementsByClassName("new-task-area__input-task")[0];
const inputDate = document.getElementsByClassName("new-task-area__input-date")[0];
const buttonMenuMobile = document.getElementsByClassName("topbar-mobile__menu-hamburger")[0];
const buttonSideMenuMobile = document.getElementsByClassName("menu__menu-hamburger")[0];
load();

inputTask.addEventListener("keyup", (event) => {
  if (event.key == "Enter" && inputTask.value && inputDate.value) {
    newTask();
    load();
  }
});

buttonMenuMobile.addEventListener("click", () => {
  const sideMenu = document.getElementsByClassName("menu")[0];
  sideMenu.classList.add("menu-mobile--open");
});

buttonSideMenuMobile.addEventListener("click", () => {
  const sideMenu = document.getElementsByClassName("menu")[0];
  sideMenu.classList.remove("menu-mobile--open");
});