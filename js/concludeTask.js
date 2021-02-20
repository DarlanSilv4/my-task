import { load } from './loadTasks.js';

export const concludeButton = (id) => {
    const button = document.createElement('button');
    button.classList.add('task__check-button');

    if (isConcluded(id)) {
        button.classList.add('--checked');
    }
    button.title = 'Mark as concluded';
    button.addEventListener('click', () => concludeTask(id));
    return button;
}

const concludeTask = (id) => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const taskFound = tasks.find(task => task.id == id);
    taskFound.concluded = !taskFound.concluded;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    load();
}

const isConcluded = (id) => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const taskFound = tasks.find(task => task.id == id);
    if (taskFound.concluded) {
        return true;
    }
    return false;
}