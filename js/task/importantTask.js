import { load } from './loadTasks.js';

export const importantButton = (id) => {
    const button = document.createElement('button');

    button.classList.add('task__important-button');
    if (isImportant(id)) {
        button.classList.add('--importance-button-active');
    }
    button.title = 'Mark as important';
    button.innerHTML = `<svg xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 24 24" fill = "white" width = "24px" height = "24px" >
                        <path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                        </svg>`;

    button.addEventListener('click', () => markAsImportant(id));
    return button;
}

const markAsImportant = (id) => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    const taskFound = tasks.find(task => task.id == id);
    taskFound.important = !taskFound.important;

    localStorage.setItem('tasks', JSON.stringify(tasks));
    load();
}

export const isImportant = (id) => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    const taskFound = tasks.find(task => task.id == id);
    if (taskFound.important) {
        return true;
    }
    return false;
}

