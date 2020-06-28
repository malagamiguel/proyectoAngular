const { Schema, model } = require("mongoose");

//para cifrar la contraseña
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//metodo para cifrar la contraseña
userSchema.methods.encriptarPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  //Esta linea devuelve la password cifrada
  return await bcrypt.hash(password, salt);
};

//comparar contraseñas al hacer login
userSchema.methods.compararPassword = async function (passwordEnviada) {
  return await bcrypt.compare(passwordEnviada, this.password);
};

module.exports = model("Usuario", userSchema);
