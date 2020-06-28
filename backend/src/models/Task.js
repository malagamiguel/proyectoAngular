const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  cantidad: {
    type: Number,
    default: 0,
  },
  fecha: {
    type: Date,
    required: true,
  },
});

module.exports = model("Tarea", taskSchema);
