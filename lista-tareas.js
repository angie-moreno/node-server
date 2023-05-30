const http = require("http");
const port = 3000;
const host = "localhost";

const server = http.createServer((req, res) => {
  const tasks = [
    {
      id: 1,
      description: "Hacer la compra",
      completed: false,
    },
    {
      id: 2,
      description: "Lavar los platos",
      completed: true,
    },
    {
      id: 3,
      description: "Sacar la basura",
      completed: false,
    },
  ];
  if (req.method === "GET" && req.url === "/tasks") {
    res.statusCode = 200;
    res.end(JSON.stringify(tasks));
  } else {
    res.statusCode = 404;
    res.end("recurso no encontrado");
  }
});
server.listen(port, host, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
