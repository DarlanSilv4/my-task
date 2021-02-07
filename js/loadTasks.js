export const load = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    let taskToday = "";
    let taskUpcoming = "";
    tasks.forEach(task => {
        if (isForToday(task.date)) {
            taskToday +=
                "<li class='tasks-today__task task'>" +
                "<button class='task__check-button'></button><div class='task__info'>" +
                "<span class='task__title'>" +
                task.value +
                "</span><span class='task__date'>" +
                task.date
                + "</span><div></li>";
        } else {
            taskUpcoming +=
                "<li class='tasks-upcoming__task task'>" +
                "<button class='task__check-button'></button><div class='task__info'>" +
                "<span class='task__title'>" +
                task.value +
                "</span><span class='task__date'>" +
                task.date
                + "</span><div></li>";
        }

    });

    const taskTodayElement = document.getElementsByClassName("tasks-today")[0];
    const taskUpcomingElement = document.getElementsByClassName("tasks-upcoming")[0];

    taskTodayElement.innerHTML = taskToday;
    taskUpcomingElement.innerHTML = taskUpcoming;

    activeScrollBar(taskToday, taskTodayElement);
    activeScrollBar(taskUpcoming, taskUpcomingElement);

    document.getElementsByClassName("new-task-area__input-task")[0].value = "";
}

const isForToday = (date) => {
    const timestamp = new Date();
    const day = timestamp.getDate()
    const month = timestamp.getMonth() + 1;
    const year = timestamp.getFullYear();

    const dayTask = parseInt(date[0] + date[1]);
    const monthTask = parseInt(date[3] + date[4]);
    const yearTask = parseInt(date[6] + date[7] + date[8] + date[9]);

    if (dayTask <= day && monthTask <= month && yearTask <= year) {
        return true;
    }
    return false;
}

const activeScrollBar = (string, element) => {


    const regex = new RegExp("<li", 'g');
    let count = 0;
    while (regex.exec(string)) {
        count++;
    }
    if (count > 3) {
        element.classList.add("--task-container-scroll");
    }
}