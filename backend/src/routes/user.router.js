const { Router } = require("express");

const router = Router();

const userCtrl = require("../controllers/user.controller");

//Ruta para mostrar todos los usuarios
router.get("/users", userCtrl.users);

//Rura para mostrar el formulario de crear
router.get("/", userCtrl.index);

//Ruta para crear SignUp
router.post("/signup", userCtrl.createUser);

//Ruta para iniciar sesion SignIn
router.post("/signin", userCtrl.getUser);

module.exports = router;
