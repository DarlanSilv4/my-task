import { isForToday } from '../util.js';
import { isImportant } from '../task/importantTask.js';
import { activeScrollBar } from '../util.js';
import { drawTask } from './drawTask.js';

export const load = () => {
    const host = location.origin;
    const links = {
        home: host + '/index.html',
        importance: host + '/important.html',
    }
    const currentLocation = location.href;

    switch (currentLocation) {
        case links.home: loadAll(); break;
        case links.importance: loadOnlyImportant(); break;
    }

}

const loadAll = () => {
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

const loadOnlyImportant = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskImportantElement = document.getElementsByClassName("tasks-important")[0];
    cleanTasks(taskImportantElement, null);

    tasks.forEach(task => {
        const drawnTask = drawTask(task);
        if (isImportant(task.id)) {
            taskImportantElement.appendChild(drawnTask);
        }
    });
    activeScrollBar(taskImportantElement);
    document.getElementsByClassName("new-task-area__input-task")[0].value = "";
}


const cleanTasks = (element, element2) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    if (element2 != null) {
        while (element2.firstChild) {
            element2.removeChild(element2.firstChild);
        }
    }
}