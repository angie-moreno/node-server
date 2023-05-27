const readline = require("readline-sync");
const modulo = require("./lista-tareas");

function main() {
  let exit = false;
  while (!exit) {
    console.log("--- Gestor de Tareas ---");
    console.log("1. Agregar Tarea");
    console.log("2. Eliminar Tarea");
    console.log("3. Marcar Tarea como Completada");
    console.log("4. Mostrar Tareas");
    console.log("5. Salir");
    const option = readline.question("Seleccione una opcion: ");

    switch (option) {
      case "1":
        modulo
          .addTask()
          .then((message) => console.log(message))
          .catch((error) => console.log(error));
        break;
      case "2":
        modulo
          .deleteTask()
          .then((message) => console.log(message))
          .catch((error) => console.log(error));
        break;
      case "3":
        modulo
          .completeTask()
          .then((message) => console.log(message))
          .catch((error) => console.log(error));
        break;
      case "4":
        modulo
          .showTasks()
          .then((message) => console.log(message))
          .catch((error) => console.log(error));
        break;
      case "5":
        exit = true;
        console.log("¡Hasta luego!");
        break;
      default:
        console.log("Opción no válida. Intente nuevamente.");
    }
    console.log("\n");
  }
}

main();
