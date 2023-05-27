const readline = require("readline-sync");
const modulo = require("./lista-tareas");

async function main() {
  try {
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
          const caso1 = await modulo.addTask();
          console.log(caso1);
          break;
        case "2":
          const caso2 = await modulo.deleteTask();
          console.log(caso2);

          break;
        case "3":
          const caso3 = await modulo.completeTask();
          console.log(caso3);
          break;
        case "4":
          const caso4 = await modulo.showTasks();
          console.log(caso4);
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
  } catch (error) {
    console.log(error);
  }
}

main();
