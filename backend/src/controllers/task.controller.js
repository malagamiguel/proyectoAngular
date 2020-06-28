const ctrlTask = {};

//importamos el modelo de task
const Task = require("../models/Task");

//Mostrar todas la tareas
ctrlTask.tasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

module.exports = ctrlTask;
