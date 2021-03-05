export const isForToday = (date) => {
    const timestamp = new Date();
    const day = timestamp.getDate()
    const month = timestamp.getMonth() + 1;
    const year = timestamp.getFullYear();

    const dayTask = parseInt(date[0] + date[1]);
    const monthTask = parseInt(date[3] + date[4]);
    const yearTask = parseInt(date[6] + date[7] + date[8] + date[9]);

    if (dayTask === day && monthTask === month && yearTask === year) {
        return true;
    }
    return false;
}

export const isTaskOverdue = (date) => {
    const timestamp = new Date();
    const day = timestamp.getDate()
    const month = timestamp.getMonth() + 1;
    const year = timestamp.getFullYear();

    const dayTask = parseInt(date[0] + date[1]);
    const monthTask = parseInt(date[3] + date[4]);
    const yearTask = parseInt(date[6] + date[7] + date[8] + date[9]);

    if ((dayTask < day && monthTask <= month && yearTask <= year) ||
        (monthTask < month && yearTask <= year) ||
        (yearTask < year)) {
        return true;
    }

    return false;

}

export const activeScrollBar = (element) => {
    if (element.childElementCount > 3) {
        element.classList.add("--task-container-scroll");
    }
}