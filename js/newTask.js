var tasks = [];

const idGenerator = () => {
    const timestamp = new Date();
    const id =
        timestamp.getHours.toString +
        timestamp.getMinutes.toString +
        timestamp.getSeconds.toString +
        timestamp.getMilliseconds.toString;

    return id;
};

export const newTask = () => {
    const id = idGenerator();
    const inputTask = document.getElementsByClassName("new-task-area__input-task")[0];
    const value = inputTask.value;

    const calendar = document.getElementsByClassName("new-task-area__input-date")[0];
    const date = moment(calendar.value);
    const formattedDate = date.format("DD/MM/YYYY");

    const concluded = false;

    const task = {
        id: id,
        value: value,
        date: formattedDate,
        concluded: concluded,
    };

    tasks.push(task);
    return tasks;
};
