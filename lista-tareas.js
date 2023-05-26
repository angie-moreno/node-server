const readline = require("readline-sync");

const tasks = [];

exports.addTask = () => {
  const indicador = readline.question("Indicador de la tarea ");
  const descripcion = readline.question("Descripción de la tarea ");

  const task = {
    indicador,
    descripcion,
    completada: false,
  };

  tasks.push(task);
  console.log("Tarea agragada correctamente");
};

exports.deleteTask = () => {
  const indicador = readline.question("Indicador de la tarea a eliminar");

  const taskIndex = tasks.findIndex((task) => task.indicador == indicador);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    console.log("La tarea fue eliminada correctamente");
  } else {
    console.log("No se encontro ninguna tarea con el indicador proporcionado");
  }
};

exports.completeTask = () => {
  const indicador = readline.question(
    "Indicador de la tarea que quieres completar"
  );

  const task = tasks.find((task) => task.indicador == indicador);
  if (task) {
    task.completada = true;
    console.log("La tarea ha sido completada");
  } else {
    console.log("No se encontro ninguna tarea con el indicador proporcionado");
  }
};
exports.showTasks = () => {
  console.log("Lista de tareas");
  tasks.forEach((task) => {
    const status = task.completada ? "completada" : "pendiente";
    console.log(`${task.indicador} ${task.descripcion} ${status} `);
  });
};
