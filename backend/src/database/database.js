const mongoose = require("mongoose");

const DB_URI =
  "mongodb://" + process.env.MONGODB_HOST + "/" + process.env.MONGODB_DATABASE;

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((db) => console.log("La BD esta conectada"))
  .catch((err) => console.log(err));
