import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Olá, mundo yesye!");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
