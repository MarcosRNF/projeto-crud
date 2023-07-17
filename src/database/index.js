const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/projeto-crud", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado ao mongoDB"))
  .catch((error) => console.log(error));
