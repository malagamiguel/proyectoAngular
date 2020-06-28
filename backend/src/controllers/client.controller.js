const ctrlClient = {};

//importamos el modelo de task
const Client = require("../models/Client");

//Mostrar todas la tareas
ctrlClient.clients = async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
};

module.exports = ctrlClient;
