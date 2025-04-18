// backend/index.js
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;

app.get("/api/pncp", async (req, res) => {
  const termo = req.query.q;
  try {
    const response = await fetch(
      `https://www.gov.br/pncp-api/api/consulta/pncp/contratacoes?termo=${encodeURIComponent(termo)}&pagina=1`
    );
    const data = await response.json();
    res.json(data); 
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar dados do PNCP" });
  }
});

app.get("/api/comprasnet", async (req, res) => {
  const termo = req.query.q;
  try {
    const response = await fetch(
      `https://gateway.servicos.gov.br/licitacoes/v1/licitacoes.json?uasg=130002&descricao=${encodeURIComponent(termo)}`
    );
    const data = await response.json();
    res.json(data._embedded?.licitacoes || []);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar dados do ComprasNet" });
  }
});

app.listen(PORT, () => console.log(`Servidor backend rodando na porta ${PORT}`));
