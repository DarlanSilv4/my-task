import { isForToday } from './util.js';
import { activeScrollBar } from './util.js';
import { drawTask } from './drawTask.js';

export const load = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskTodayElement = document.getElementsByClassName("tasks-today")[0];
    const taskUpcomingElement = document.getElementsByClassName("tasks-upcoming")[0];
    cleanTasks(taskTodayElement, taskUpcomingElement);

    tasks.forEach(task => {
        const drawnTask = drawTask(task);
        if (isForToday(task.date)) {
            taskTodayElement.appendChild(drawnTask);
        }
        else {
            taskUpcomingElement.appendChild(drawnTask)
        }
    });
    activeScrollBar(taskTodayElement);
    activeScrollBar(taskUpcomingElement);
    document.getElementsByClassName("new-task-area__input-task")[0].value = "";
}

const cleanTasks = (element, element2) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    while (element2.firstChild) {
        element2.removeChild(element2.firstChild);
    }
}