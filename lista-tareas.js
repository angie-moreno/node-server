const readline = require("readline-sync");

const tasks = [];

exports.addTask = () => {
  return new Promise((resolve) => {
    const indicador = readline.question("Indicador de la tarea ");
    const descripcion = readline.question("Descripcion de la tarea ");

    const task = {
      indicador,
      descripcion,
      completada: false,
    };

    tasks.push(task);
    resolve("Tarea agragada correctamente");
  });
};

exports.deleteTask = () => {
  return new Promise((resolve, reject) => {
    const indicador = readline.question("Indicador de la tarea a eliminar");

    const taskIndex = tasks.findIndex((task) => task.indicador == indicador);
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      resolve("La tarea fue eliminada correctamente");
    } else {
      reject("No se encontro ninguna tarea con el indicador proporcionado");
    }
  });
};

exports.completeTask = () => {
  return new Promise((resolve, reject) => {
    const indicador = readline.question(
      "Indicador de la tarea que quieres completar"
    );

    const task = tasks.find((task) => task.indicador == indicador);
    if (task) {
      task.completada = true;
      resolve("La tarea ha sido completada");
    } else {
      reject("No se encontro ninguna tarea con el indicador proporcionado");
    }
  });
};
exports.showTasks = () => {
  return new Promise((resolve) => {
    console.log("Lista de tareas");
    tasks.forEach((task) => {
      const status = task.completada ? "completada" : "pendiente";
      resolve(`${task.indicador} ${task.descripcion} ${status} `);
    });
  });
};
