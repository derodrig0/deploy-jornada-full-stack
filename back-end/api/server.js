// API significa Application Programming Interface
// Principais tipos de requisições HTTP:
// GET: Obter dados do servidor
// POST: Enviar dados para o servidor
// PUT: Atualizar dados no servidor
// DELETE: Deletar dados do servidor
// PATCH: Atualizar parcialmente dados no servidor
// CRUD: Create, Read, Update, Delete
// Endpoint: URL que representa um recurso na API
// Middleware: Função que pode acessar a requisição, resposta e o próximo middleware na pilha


import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.get("/artists", async (req, res) => {
  res.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (req, res) => {
  res.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
