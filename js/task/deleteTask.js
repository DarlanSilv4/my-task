import { load } from './loadTasks.js';

export const deleteButton = (id) => {
    const button = document.createElement('button');
    button.classList.add('task__delete-button');
    button.title = 'Delete';
    button.innerHTML = `<svg xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 24 24" fill = "white" width = "24px" height = "24px" >
                        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/>
                        </svg>`

    button.addEventListener('click', () => showModal(id));
    return button;
}

const deleteTask = (id) => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    console.log(id);
    tasks.forEach(task => {
        if (task.id === id) {
            const position = tasks.indexOf(task);
            tasks.splice(position, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
    hideModal();
    load();
}

const showModal = (id) => {
    const modal = document.getElementsByClassName('modal-delete')[0];
    modal.classList.remove('--hide-modal');

    const confirmButton = document.getElementsByClassName('confirm')[0];
    confirmButton.addEventListener('click', () => {
        deleteTask(id)
    });

    const cancelButton = document.getElementsByClassName('cancel')[0];
    cancelButton.addEventListener('click', () => {
        hideModal();
    })

    modal.addEventListener('click', (event) => {
        if (event.target.classList[0] == 'modal-delete') {
            hideModal();
        }
    });
}

const hideModal = () => {
    const modal = document.getElementsByClassName('modal-delete')[0];
    removeConfirmButtonEventListener();
    modal.classList.add('--hide-modal');
}

const removeConfirmButtonEventListener = () => {
    const confirmButton = document.getElementsByClassName('confirm')[0];
    const newConfirmButton = confirmButton.cloneNode('true');
    confirmButton.parentNode.replaceChild(newConfirmButton, confirmButton);
}