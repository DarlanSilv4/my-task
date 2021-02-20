import { concludeButton } from './concludeTask.js';
import { importantButton } from './importantTask.js';
import { deleteButton } from './deleteTask.js';
import { isForToday } from './util.js';

export const drawTask = ({ id, value, date }) => {
    const task = document.createElement('li');

    if (isForToday(date)) {
        task.classList.add('tasks-today__task', 'task');
    }
    else {
        task.classList.add('tasks-upcoming__task', 'task');
    }

    const info = document.createElement('div');
    info.classList.add('task__info');
    info.innerHTML = `<span class='task__title'>${value}</span>
                      <span class='task__date'> ${date}</span>`;

    const controlButton = document.createElement('div');
    controlButton.classList.add('task__control-button');
    controlButton.appendChild(importantButton(id));
    controlButton.appendChild(deleteButton(id));

    task.appendChild(concludeButton(id));
    task.appendChild(info);
    task.appendChild(controlButton);

    return task;
}