const { Router } = require("express");

const router = Router();

const taskCtrl = require("../controllers/task.controller");

//Ruta para mostrar todos los tasks
router.get("/", taskCtrl.tasks);

module.exports = router;
