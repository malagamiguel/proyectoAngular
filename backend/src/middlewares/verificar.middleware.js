//requerimos el modulo para tokens
const jwt = require("jsonwebtoken");

const verificarMiddleware = {};

verificarMiddleware.verificarToken = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      msg: "No tiene autorización.",
    });
  }
  //NOta: el token devuelto sera de la forma: Bearer rfnrjvhnskvndv
  //nosotros no necesitamos el Bearer por lo tanto separaremos el Bearer del token.
  const token = req.headers.authorization.split(" ")[1];

  //Comprobamos que el token no sea nulo
  if (token === "null") {
    return res.status(401).json({
      msg: "No tiene autorización.",
    });
  }

  //Guardamos el contenido que enviamos dentro del token en una variable
  const payload = await jwt.verify(token, process.env.KEY_SECRET);

  if (!payload) {
    return res.status(401).json({
      msg: "No tiene autorización.",
    });
  }

  //Guardamos el id del payload en la variable req.
  req.userId = payload._id;
  next();
};

module.exports = verificarMiddleware;
