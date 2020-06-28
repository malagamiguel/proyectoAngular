const { Router } = require("express");

const router = Router();

const clientCtrl = require("../controllers/client.controller");

//IMportamos el middleware de verificacion de token
const verificarMidd = require("../middlewares/verificar.middleware");

//Ruta para mostrar todos los clients
router.get("/", verificarMidd.verificarToken, clientCtrl.clients);

module.exports = router;
