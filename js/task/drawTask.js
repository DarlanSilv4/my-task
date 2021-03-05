import { concludeButton, isConcluded } from './concludeTask.js';
import { importantButton } from './importantTask.js';
import { deleteButton } from './deleteTask.js';
import { isForToday, isTaskOverdue } from '../util.js';

export const drawTask = ({ id, value, date }) => {
    const task = document.createElement('li');

    if (isForToday(date) || isTaskOverdue(date)) {
        task.classList.add('tasks-today__task', 'task');
    }
    else {
        task.classList.add('tasks-upcoming__task', 'task');
    }

    const info = document.createElement('div');
    info.classList.add('task__info');
    const taskTitle = document.createElement('span');
    taskTitle.classList.add('task__title');
    taskTitle.innerHTML = value;
    const taskDate = document.createElement('span');
    taskDate.classList.add('task__date');
    taskDate.innerHTML = date;

    if (isConcluded(id)) {
        taskTitle.classList.add('--task-concluded-title');
    }

    info.appendChild(taskTitle);
    info.appendChild(taskDate);

    const controlButton = document.createElement('div');
    controlButton.classList.add('task__control-button');
    controlButton.appendChild(importantButton(id));
    controlButton.appendChild(deleteButton(id));

    task.appendChild(concludeButton(id));
    task.appendChild(info);
    task.appendChild(controlButton);

    return task;
}