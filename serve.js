const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

let licitacoes = [];

// Rota para criar uma nova licitação
app.post('/licitacoes', (req, res) => {
  const { titulo, descricao, valor } = req.body;
  const novaLicitacao = { id: licitacoes.length + 1, titulo, descricao, valor };
  licitacoes.push(novaLicitacao);
  res.status(201).json(novaLicitacao);
});

// Rota para listar todas as licitações
app.get('/licitacoes', (req, res) => {
  res.json(licitacoes);
});

// Rota para buscar uma licitação por ID
app.get('/licitacoes/:id', (req, res) => {
  const { id } = req.params;
  const licitacao = licitacoes.find(l => l.id === parseInt(id));
  if (!licitacao) return res.status(404).json({ error: 'Licitação não encontrada' });
  res.json(licitacao);
});

app.listen(port, () => {
