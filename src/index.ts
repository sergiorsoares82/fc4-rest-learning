import express from "express";
import router from "./routes";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.send("Olá, mundo!");
});

app.use(router);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
