const ctrlUser = {};

//importamos el modelo
const User = require("../models/User");

//requerimos el modulo para tokens
const jwt = require("jsonwebtoken");

//MOstrar todos los usuarios
ctrlUser.users = (req, res) => {
  res.send("Hola mundo");
};

//Mostrar el formulario de Resgistro
ctrlUser.index = (req, res) => {
  res.send("Aqui ira el formulario");
};

//Crear un usuario SigUp
ctrlUser.createUser = async (req, res) => {
  //Traemos los datos enviados por el navegador
  const { email, password } = req.body;

  //Comprobacion de email
  const emailUser = await User.findOne({ email });

  if (emailUser) {
    //Si el email existe devolvemos al formulario.
    res.json({
      msg: "El usuario ya existe",
    });
  } else {
    //Creamos un nuevo modelo de usuario
    const newUser = new User({
      email,
      password,
    });

    //Encriptamos la contraseña
    newUser.password = await newUser.encriptarPassword(password);

    //guardamos el usuario
    await newUser.save();

    //creamos un token
    const token = jwt.sign({ _id: newUser._id }, process.env.KEY_SECRET);

    //devolvemos el token
    res.status(200).json({ token });
  }
};

//Iniciar sesion SignIn
ctrlUser.getUser = async (req, res) => {
  //Traemos los datos enviados por el navegador para el inicio de sesion
  const { email, password } = req.body;

  //Buscamos al usuario por su correo
  const user = await User.findOne({ email });

  //Vemos si existe el email
  if (!user) {
    return res.status(401).json({
      msg: "El email no existe",
    });
  }

  //Comparamos la contraseña
  const respuesta = await user.compararPassword(password);
  if (!respuesta) {
    return res.status(401).json({
      msg: "La contraseña es incorrecta",
    });
  }

  //creamos un token
  const token = jwt.sign({ _id: user._id }, process.env.KEY_SECRET);

  //devolvemos el token
  res.status(200).json({ token });
};

module.exports = ctrlUser;
