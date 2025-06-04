// Servidor Node.js para servir o Super Mario Runner
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Atualizar os caminhos para servir arquivos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Atualizar a rota para servir o index.html da pasta 'public'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Servir README.md como texto (opcional)
app.get('/README.md', (req, res) => {
  res.sendFile(path.join(__dirname, 'README.md'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
