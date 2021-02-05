export const load = (tasks) => {
    let listTask = "";
    tasks.forEach(task => {
        listTask +=
            "<li class='tasks-today__task task'>" +
            "<button class='task__check-button'></button><div class='task__info'>" +
            "<span class='task__title'>" +
            task.value +
            "</span><span class='task__date'>" +
            task.date
            + "</span><div></li>";
    });

    if (tasks.length > 3) {
        document
            .getElementsByClassName("tasks-today")[0]
            .classList.add("--task-container-scroll");
    }

    document.getElementsByClassName("tasks-today")[0].innerHTML = listTask;
    document.getElementsByClassName("new-task-area__input-task")[0].value = "";
}