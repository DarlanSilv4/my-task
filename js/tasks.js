var tasks = [];

function idGenerator() {
  let timestamp = new Date();
  let id =
    timestamp.getHours.toString +
    timestamp.getMinutes.toString +
    timestamp.getSeconds.toString +
    timestamp.getMilliseconds.toString;

  return id;
}

function newTask() {
  let task = {
    id: idGenerator(),
    content: document.getElementsByClassName("new-task-area__input-task")[0]
      .value,
  };
  tasks.push(task);
  update();
}

function update() {
  let listTask = "";

  tasks.forEach((task) => {
    listTask +=
      "<li class='tasks-today__task task'><button class='task__check-button'></button><div class='task__info'><span class='task__title'>" +
      task.content +
      "</span><span class='task__date'>" +
      +"</span><div></li>";
  });

  if (tasks.length > 3) {
    document
      .getElementsByClassName("tasks-today")[0]
      .classList.add("--task-container-scroll");
  }

  document.getElementsByClassName("tasks-today")[0].innerHTML = listTask;
  document.getElementsByClassName("new-task-area__input-task")[0].value = "";
}
