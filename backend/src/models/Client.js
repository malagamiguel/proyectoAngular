const { Schema, model } = require("mongoose");

const clientSchema = new Schema({
  nombres: {
    type: String,
    required: true,
  },
  apellidos: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  dni: {
    type: String,
    required: true,
  },
});

module.exports = model("Cliente", clientSchema);
