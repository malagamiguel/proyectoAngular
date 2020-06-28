const express = require("express");
const morgan = require("morgan");
const { urlencoded } = require("express");
require("dotenv").config();
//Para relacionar servidores
const cors = require("cors");

//Inicializamos express
const app = express();

//Base de datos
require("./database/database");

//Configuraciones
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(express.json());

//Rutas
app.use("/api/user", require("./routes/user.router"));
app.use("/api/task", require("./routes/task.router"));
app.use("/api/client", require("./routes/client.router"));

//Iniciar el servidor
app.listen(app.get("port"), () => {
  console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
});
