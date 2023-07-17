const express = require("express");
const path = require("path");
require("./database/index");
const routerIndex = require("./routes/index");

const app = express();

// Definindo o template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// definindo os arquivos públicos
app.use(express.static(path.join(__dirname, "public")));

// habilitando server para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true }));

app.use("/", routerIndex);

// 404 error (not found)
app.use((req, res) => {
  res.send("Página não encontrada!");
});

// executando o servidor
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
