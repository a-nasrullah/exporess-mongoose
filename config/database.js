const mongoose = require("mongoose");

const variables = require("./variables");

const DB_URI = variables.db.URI;

mongoose
  .connect(DB_URI)
  .then((resp) => console.log(`MongoDB connected on ${resp.connection.host}`));
