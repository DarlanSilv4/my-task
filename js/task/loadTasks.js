import { isForToday } from '../util.js';
import { isImportant } from '../task/importantTask.js';
import { isConcluded } from '../task/concludeTask.js';
import { activeScrollBar } from '../util.js';
import { drawTask } from './drawTask.js';

export const load = () => {
    const host = location.origin;
    const links = {
        home: host + '/index.html',
        importance: host + '/important.html',
        planned: host + '/planned.html',
        cleaning: host + '/cleaning.html',
    }
    const currentLocation = location.href;

    switch (currentLocation) {
        case links.home: loadAll(); break;
        case links.importance: loadOnlyImportant(); break;
        case links.planned: loadOnlyPlanned(); break;
        case links.cleaning: loadOnlyCleaning(); break;
        default: loadAll();
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

const loadOnlyPlanned = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskPlannedElement = document.getElementsByClassName("tasks-planned")[0];
    cleanTasks(taskPlannedElement, null);

    tasks.forEach(task => {
        const drawnTask = drawTask(task);
        if (!isForToday(task.date)) {
            taskPlannedElement.appendChild(drawnTask);
        }
    });
    activeScrollBar(taskPlannedElement);
    document.getElementsByClassName("new-task-area__input-task")[0].value = "";
}
const loadOnlyCleaning = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskCleaningElement = document.getElementsByClassName("tasks-concluded")[0];
    cleanTasks(taskCleaningElement, null);

    tasks.forEach(task => {
        const drawnTask = drawTask(task);
        if (isConcluded(task.id)) {
            taskCleaningElement.appendChild(drawnTask);
        }
    });
    activeScrollBar(taskCleaningElement);
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